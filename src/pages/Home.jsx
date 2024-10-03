import HeroSection from '../components/HeroSection';
import SpecialFeatures from '../components/SpecialFeatures';
import CourseBox from '../components/CourseBox';

function Home() {
  return (
    <div>
      <HeroSection />
      <SpecialFeatures />
      {/* Courses Section at the bottom of Home */}
      <div className="container mt-5">
        <h2>Specialization Tracks</h2>
        <CourseBox title="Data Science Track" description="Master the skills for a data-driven career." />
        <CourseBox title="App Development Track" description="Learn to build applications across platforms." />
        <CourseBox title="Cloud Technologies Track" description="Explore cloud computing technologies." />
      </div>
    </div>
  );
}

export default Home;
