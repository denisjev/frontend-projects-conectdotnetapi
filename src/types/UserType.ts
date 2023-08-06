export interface UserTableProps {
    users:          User[]
}

export interface UserItemProps {
    user:           User
    handleRemoveUser: (user: User) => void
}

export interface User {
    id:       string;
    name:     string;
    email:    string;
    country:  string;
    image:    string;
}
