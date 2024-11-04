export interface User {
    id: number;
    login: string;
    password: string;
    name: string;
    age: number;
    photo: string;
  }
export interface MainProps {
    setUser: (user: User) => void;
  }
export interface ProfileProps {
    user: User;
    setUser: (user: User | null) => void;
  }