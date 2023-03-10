export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      blogs: {
        Row: {
          id: string
          created_at: string
          title: string | null
          content: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          title?: string | null
          content?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          title?: string | null
          content?: string | null
        }
      }
      news: {
        Row: {
          id: string
          created_at: string
          title: string | null
          content: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          title?: string | null
          content?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          title?: string | null
          content?: string | null
        }
      }
      notes: {
        Row: {
          id: string
          created_at: string
          title: string
        }
        Insert: {
          id?: string
          created_at?: string
          title: string
        }
        Update: {
          id?: string
          created_at?: string
          title?: string
        }
      }
      todos: {
        Row: {
          id: number
          created_at: string
          title: string | null
          completed: boolean
          user_id: string | null
        }
        Insert: {
          id?: number
          created_at?: string
          title?: string | null
          completed?: boolean
          user_id?: string | null
        }
        Update: {
          id?: number
          created_at?: string
          title?: string | null
          completed?: boolean
          user_id?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
