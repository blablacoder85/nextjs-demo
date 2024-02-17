import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '../app/ui/home.module.css'

export default function Page() {
  return (
    <>
      <div className={styles.shape} />
      <h1>Hello world !!</h1>
    </>
  );
}
