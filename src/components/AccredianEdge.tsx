'use client';

import React from 'react';
import EdgeTimeline from './edge/EdgeTimeline';
import DomainExpertise from './edge/DomainExpertise';
import CourseSegmentation from './edge/CourseSegmentation';
import WhoShouldJoin from './edge/WhoShouldJoin';

export const AccredianEdge: React.FC = () => {
  return (
    <section id="edge" className="bg-white">
      {/* 1. The Accredian Edge - Timeline & Key Aspects */}
      <EdgeTimeline />

      {/* 2. Our Domain Expertise - 7 Specialized Program Hubs */}
      <DomainExpertise />

      {/* 3. Tailored Course Segmentation - 4 Focus Categories */}
      <CourseSegmentation />

      {/* 4. Who Should Join? Strategic Skill Enhancement Banner */}
      <WhoShouldJoin />
    </section>
  );
};

export default AccredianEdge;
