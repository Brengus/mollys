import { redirect } from 'next/navigation';

export default function RootPage() {
  // Redirect / to /ge automatically
  redirect('/ge');
}