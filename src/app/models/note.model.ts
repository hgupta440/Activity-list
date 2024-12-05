export interface Note {
  id: number;
  user: string;
  type: 'Message' | 'Phone' | 'Coffee' | 'Beer' | 'Meeting Note';
  content: string;
  timestamp: Date;
}
