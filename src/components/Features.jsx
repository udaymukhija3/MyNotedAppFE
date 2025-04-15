import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Features = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [totalCourses, setTotalCourses] = useState(0);
  const coursesPerPage = 9;

  // Function to fetch courses from PostgreSQL
  const fetchCourses = async (pageNum = 1, query = '') => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/courses`, {
        params: {
          page: pageNum,
          limit: coursesPerPage,
          search: query
        }
      });

      if (pageNum === 1) {
        setCourses(response.data.courses);
      } else {
        setCourses(prev => [...prev, ...response.data.courses]);
      }
      
      setTotalCourses(response.data.total);
      setHasMore(response.data.courses.length === coursesPerPage);
    } catch (err) {
      setError('Failed to load courses. Please try again later.');
      console.error('Error fetching courses:', err);
      
      // Fallback to mock data if API fails (for development only)
      if (pageNum === 1) {
        const mockData = getMockCourses(pageNum, query);
        setCourses(mockData);
        setTotalCourses(36);
        setHasMore(true);
      } else {
        const mockData = getMockCourses(pageNum, query);
        setCourses(prev => [...prev, ...mockData]);
        setHasMore(pageNum < 4); // Mock 4 pages of data
      }
    } finally {
      setLoading(false);
    }
  };

  // Mock data function (as fallback for development)
  const getMockCourses = (pageNum, query) => {
    const allMockCourses = [
      { id: 1, course_name: 'The Future of Solar Energy', chapters_count: 10, topics_count: 20 },
      { id: 2, course_name: 'The Future of Solar Energy', chapters_count: 10, topics_count: 20 },
      { id: 3, course_name: 'swarm robotics', chapters_count: 1, topics_count: 20 },
      { id: 4, course_name: 'Biochemical Engineering', chapters_count: 13, topics_count: 79 },
      { id: 5, course_name: 'Biochemical Engineering', chapters_count: 13, topics_count: 79 },
      { id: 6, course_name: 'Smart Blind Stick', chapters_count: 1, topics_count: 5 },
      { id: 7, course_name: 'Plant Disease Detection', chapters_count: 1, topics_count: 12 },
      { id: 8, course_name: 'Pomodoro Technique', chapters_count: 1, topics_count: 1 },
      { id: 9, course_name: 'Marketing Agro', chapters_count: 1, topics_count: 16 },
      // Add more mock data as needed
    ];
    
    // Filter by search query if provided
    const filtered = query 
      ? allMockCourses.filter(course => 
          course.course_name.toLowerCase().includes(query.toLowerCase())
        )
      : allMockCourses;
    
    // Paginate: return the slice for the requested page
    const startIndex = (pageNum - 1) * coursesPerPage;
    return filtered.slice(startIndex, startIndex + coursesPerPage);
  };

  // Initial fetch on component mount
  useEffect(() => {
    fetchCourses(1, '');
  }, []);

  // Handle search
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    setPage(1); // Reset to first page when searching
    fetchCourses(1, query);
  };

  // Load more courses
  const loadMoreCourses = () => {
    if (!loading && hasMore) {
      const nextPage = page + 1;
      setPage(nextPage);
      fetchCourses(nextPage, searchQuery);
    }
  };

  // Handle course click - redirect to course page
  const handleCourseClick = (courseId) => {
    // Replace with your actual navigation logic
    window.location.href = `/course/${courseId}`;
    // If using React Router:
    // navigate(`/course/${courseId}`);
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-semibold text-blue-900">All Courses</h2>
          <div className="relative">
            <input
              type="text"
              className="py-2 px-4 border border-gray-300 rounded-full text-sm w-64"
              placeholder="Search for all Courses"
              value={searchQuery}
              onChange={handleSearch}
            />
            <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
        
        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded-lg mb-6">
            {error}
          </div>
        )}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div 
              key={course.id} 
              className="bg-gray-50 rounded-xl p-5 hover:shadow-md transition border border-gray-100 cursor-pointer"
              onClick={() => handleCourseClick(course.id)}
            >
              <div className="flex justify-between items-start">
                <h3 className="text-blue-900 font-semibold text-lg mb-2">{course.course_name}</h3>
                <button 
                  className="text-green-500 hover:text-green-600"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering the parent onClick
                    // Add to favorites or other action
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
              <p className="text-sm text-gray-600">
                Chapters ({course.chapters_count}), Topics ({course.topics_count})
              </p>
            </div>
          ))}
        </div>
        
        {loading && (
          <div className="flex justify-center mt-8">
            <div className="loader">Loading...</div>
          </div>
        )}
        
        {!loading && hasMore && (
          <div className="flex justify-center mt-8">
            <button 
              onClick={loadMoreCourses}
              className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
            >
              Load More Courses
            </button>
          </div>
        )}
        
        {!loading && courses.length > 0 && (
          <div className="text-center mt-4 text-gray-600">
            Showing {courses.length} of {totalCourses} courses
          </div>
        )}
        
        {!loading && courses.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No courses found matching your search.
          </div>
        )}
      </div>
    </section>
  );
};

export default Features;