export class UnidadControl {
  constructor() {
    this.contadorPrograma = 0;
    this.registroInstrucciones = 0;
  }

  decode() {
    const opCodes = {
      "0000": "+",
      "0011": "^",
      "0111": "...",
      "0110": "S",
    };

    return {
      opNombre: opCodes[this.registroInstrucciones.slice(0, 4)] || "???",
      operando: this.registroInstrucciones.slice(4, 8),
    };
  }
}
