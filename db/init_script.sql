CREATE TABLE IF NOT EXISTS public.users (
    id SERIAL PRIMARY KEY,
    first_name text NOT NULL,
    last_name text NOT NULL
)