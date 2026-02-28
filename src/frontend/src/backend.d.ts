import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Student {
    instituteName: string;
    duration: string;
    name: string;
    instituteAddress: string;
    course: string;
    regNo: string;
}
export interface backendInterface {
    getStudent(): Promise<Student>;
}
