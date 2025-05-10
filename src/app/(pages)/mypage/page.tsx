import MyPageTab from './_components/mypage-tab';
import ProfileInfo from './_components/profile-info';

export default function MyPage() {
  return (
    <div className='w-full h-full flex flex-col'>
      <ProfileInfo />
      <MyPageTab />
    </div>
  );
}
