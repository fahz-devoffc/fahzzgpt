
export enum ViewType {
  CHAT = 'CHAT',
  VISION = 'VISION',
  SETTINGS = 'SETTINGS',
  DEVELOPER = 'DEVELOPER',
  TEMPLATES = 'TEMPLATES',
  VERSION = 'VERSION',
  DEBUG = 'DEBUG'
}

export enum AppMode {
  DEFAULT = 'FahzGPT Default',
  MATH = 'FahzGPT Math',
  CODER = 'FahzGPT Coder',
  KOKI = 'FahzGPT Koki',
  RELIGION = 'FahzGPT Religion'
}

export interface User {
  id: string;
  name: string;
  avatar: string;
  email: string;
  religion?: string;
}

export interface ChatAttachment {
  type: 'image' | 'file';
  name: string;
  data: string; // base64 for images, raw text for files
  mimeType: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
  attachment?: ChatAttachment;
}

export interface ChatSession {
  id: string;
  title: string;
  messages: ChatMessage[];
  lastModified: Date;
  mode: AppMode;
}

export interface GeneratedImage {
  url: string;
  prompt: string;
  timestamp: Date;
}
