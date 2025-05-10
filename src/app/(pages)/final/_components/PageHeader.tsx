export default function PageHeader({ title }: { title: string }) {
  return (
    <div className='bg-gray-500 text-white text-2xl font-bold py-4 text-center mb-6'>
      {title}
    </div>
  );
}
