-- Reference only: documents the actual schema of the comments table as
-- provisioned in the Supabase project (columns confirmed via the REST API:
-- id, created_at, article_id, name, message).
--
-- Run the policies below if anonymous inserts aren't already allowed —
-- the app posts comments with no login, so the anon key needs select +
-- insert access. (No update/delete policies, so comments can't be edited
-- or removed via the anon key.)

alter table comments enable row level security;

create policy "Anyone can read comments"
  on comments for select
  to anon
  using (true);

create policy "Anyone can post a comment"
  on comments for insert
  to anon
  with check (true);
