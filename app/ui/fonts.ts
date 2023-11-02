import { GeistSans } from 'geist/font';
import { Inter, Lusitana } from 'next/font/google';

export const geist = GeistSans;

export const inter = Inter({subsets: ['latin']});

export const lusitana = Lusitana({subsets: ['latin'], weight: ['400', '700']});