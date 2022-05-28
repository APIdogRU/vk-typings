export interface IUserRelative {
    id?: number;
    name?: string;
    type: 'child' | 'sibling' | 'parent' | 'grandparent' | 'grandchild';
}
