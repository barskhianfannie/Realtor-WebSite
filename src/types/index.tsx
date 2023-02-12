export interface PersonObject {
  firstName: string;
  lastName: string;
  stage: string;
  emails:EmailObject[];
  phones:PhoneObject[];
}

export interface EmailObject {
  value:string;
  type:string;
  isPrimary:boolean
}

export interface PhoneObject {
  value:string;
  type:string;
  isPrimary:boolean
}


export interface EventObject {
  source:string;
  type:string;
  person:PersonObject;
}