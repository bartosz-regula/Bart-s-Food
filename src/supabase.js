
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rlgadzhmjenupbfshsbt.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJsZ2FkemhtamVudXBiZnNoc2J0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEzMTE2MDEsImV4cCI6MTk5Njg4NzYwMX0.Kw7eG088tfUb6DOKIR6yBF6-unbOK_NEADSGaSJ6oNk'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;