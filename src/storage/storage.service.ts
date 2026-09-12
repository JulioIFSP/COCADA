import { Injectable, NotFoundException } from '@nestjs/common';
@Injectable() export class StorageService {
 private data = new Map<string, object[]>();
 list<T> (key:string): T[] { return (this.data.get(key)||[]) as T[]; }
 get<T extends {id:string}>(key:string,id:string):T { const item=this.list<T>(key).find(x=>x.id===id); if(!item) throw new NotFoundException('Registro não encontrado.'); return item; }
 create<T extends object>(key:string, value:T):T&{id:string}{const item={...value,id:crypto.randomUUID()} as T&{id:string}; this.data.set(key,[...this.list<object>(key),item]); return item;}
 update<T extends {id:string}>(key:string,id:string,value:Partial<T>):T { const old=this.get<T>(key,id), item={...old,...value,id}; this.data.set(key,this.list<T>(key).map(x=>x.id===id?item:x)); return item; }
 remove<T extends {id:string}>(key:string,id:string):void { this.get<T>(key,id); this.data.set(key,this.list<T>(key).filter(x=>x.id!==id)); }
 exists(key:string,id:string){ return this.list<{id:string}>(key).some(x=>x.id===id); }
}
