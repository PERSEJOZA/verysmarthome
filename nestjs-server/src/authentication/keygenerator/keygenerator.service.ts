import { Injectable } from '@nestjs/common';
const NodeRSA = require('node-rsa');

@Injectable()
export class KeygeneratorService {
  private rsaKey = new NodeRSA();
  
  constructor() {
    this.rsaKey.generateKeyPair();
  }
  
  public getKey() {
    return this.rsaKey.exportKey('pkcs1-private-pem');
  }

  public getPublicKey() {
    return this.rsaKey.exportKey('pkcs1-public-pem');
  }
}
