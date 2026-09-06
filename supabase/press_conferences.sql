-- Reference only: documents the actual schema of the press_conferences table
-- as provisioned in the Supabase project (columns confirmed via the REST API).

create table if not exists press_conferences (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  week integer not null,
  team_id integer not null,
  type text not null check (type in ('pre', 'post')),
  content text not null
);

create index if not exists press_conferences_lookup_idx
  on press_conferences (week, team_id, type, created_at desc);

-- No login is required by the app, so allow anonymous read/insert/update.
-- (No delete policy, so entries can't be removed via the anon key.)
alter table press_conferences enable row level security;

create policy "Anyone can read press conferences"
  on press_conferences for select
  to anon
  using (true);

create policy "Anyone can post a press conference"
  on press_conferences for insert
  to anon
  with check (true);

-- Run this next (new): the app is now single-entry per week/team/type —
-- once posted, the app edits the existing row instead of inserting a new one,
-- so the anon key needs update access too.
create policy "Anyone can edit a press conference"
  on press_conferences for update
  to anon
  using (true)
  with check (true);

-- Optional but recommended: enforce single-entry-per-combination at the DB
-- level too, so a race between two simultaneous "Post" clicks can't create
-- duplicates the UI would then have no way to reconcile.
alter table press_conferences
  add constraint press_conferences_unique_entry unique (week, team_id, type);
