declare type GlobalState = {
  user: User | null;
  uploadedProducts: Product[];
  taskId: string | null;
};