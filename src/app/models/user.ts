export interface IUser{
  utilisateurid?: number| null;
  utilisateuremail?: string| null;
  utilisateurpassword?: string| null;
}

export class User implements IUser{
  constructor(
  public utilisateurid?: number| null,
  public utilisateuremail?: string| null,
  public utilisateurpassword?: string| null,
  ){}
}
