export type SocialIcon = Record<string, string | any>

export interface JobExperience {
    title: string;
    company: string;
    startDate: string;
    endDate: string;
    location: string;
    description: string;
    technologies?: string[];
  }
 // src/types.ts
export interface ExperienciaItem {
  puesto: string;
  empresa: string;
  fecha: string;
  descripcion: string;
}
