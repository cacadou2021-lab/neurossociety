import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://lgrllhsfgvnngtmlwwug.supabase.co";
const SUPABASE_KEY = "sb_publishable_KtQkZ2_nx8rR65ypG9ZWSw_AjVWWX-N";

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
