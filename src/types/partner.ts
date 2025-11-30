interface Translation {
  fr: string;
  ar: string;
  en: string;
}

interface Address {
  rue: Translation;
  ville: Translation;
  pays: Translation;
}

export interface PartnerLinks {
  facebook?: string;
  instagram?: string;
  tiktok?: string;
  [key: string]: string | undefined;
}

export interface PartnerContactInfo {
  [key: string]: any;
}

export interface Partner {
  partenaire_id?: string;
  id?: number;
  nom_partenaire: Translation;
  logo?: string;
  description?: Translation;
  adresse?: Address[];
  email: string;
  telephone: string;
  site_web: string;
  date_ajout?: string;
  actif?: boolean;
  facebook?: string;
  instagram?: string;
  tiktok?: string;
  type_partenaire?: any;
  date_deb: string;
  date_fin: string;
  liens_externes?: PartnerLinks;
  date_creation_entreprise: string;
  priorite_affichage: number;
  image_banniere?: string;
}
