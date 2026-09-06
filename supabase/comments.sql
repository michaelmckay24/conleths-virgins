-- Reference only: documents the actual schema of the comments table as
-- provisioned in the Supabase project (columns confirmed via the REST API:
-- id, created_at, article_id, name, message, parent_comment_id).
--
-- parent_comment_id is null for top-level comments and holds the parent
-- comment's id for replies. The app nests one level only (replies to
-- top-level comments, never replies-to-replies). Run this if the column
-- isn't present yet (match comments.id's type — uuid):
--
--   alter table comments
--     add column if not exists parent_comment_id uuid
--     references comments (id) on delete cascade;
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
