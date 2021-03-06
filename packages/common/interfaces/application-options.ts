export interface AppConfig {
  extensions: any[];
  httpPort?: 3000 | number;
}

export interface ApplicationOptions extends AppConfig {
  name: string;
}
