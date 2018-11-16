interface Comuna {
    id: number;
    nombre: string;
}

interface Direccion {
    calle: string;
    numero: number;
    nombre?: string;
    comuna?: string | Comuna;
}
export interface Empleado {
    id: number;
    nombre: string;
    apellido: string;
    telefono: number;
    rut: string;
    fechaNacimiento: string;
    direccion: Direccion;
    activo: number;
}