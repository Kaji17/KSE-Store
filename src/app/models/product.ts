export interface IProduct{
  marchandiseid?: number| null;
  marchandisedatecreation?: string| null;
  marchandiseenable?: boolean| null;
  marchandiseimagepath?: string|null;
  marchandisename?: string| null;
  marchandisequantity?: number| null;
  marchandisestatus?: string|null;

}

export class Product implements IProduct{
  constructor(
    public marchandiseid?: number| null,
    public marchandisedatecreation?: string| null,
    public marchandiseenable?: boolean| null,
    public marchandiseimagepath?: string|null,
    public marchandisename?: string| null,
    public marchandisequantity?: number| null,
    public marchandisestatus?: string|null,
  ){}
}