# Pulse Fullstack App

## Setup

1. npm install
2. rename .env.local.example → .env.local
3. add supabase keys
4. run SQL:

create table posts (
  id bigint generated always as identity primary key,
  content text,
  created_at timestamp default now()
);

5. npm run dev
