/**
 * i18n.js - Success International School
 * Handles English/Arabic translation and RTL support.
 */

const translations = {
    'en': {
        'nav_translate': 'Translate',
        'nav_arabic': 'Arabic',
        'nav_english': 'English',
        'nav_quick_links': 'Quick Links',
        'nav_admissions': 'Admissions',
        'nav_careers': 'Careers',
        'nav_gallery': 'Gallery',
        'nav_branches': 'Branches',
        'nav_mansoura': 'Al Mansoura Branch',
        'nav_munawwara': 'Al Munawwara Branch',
        'nav_rabia': 'Ar Rabia Branch',
        'nav_search': 'Search',
        'nav_menu': 'MENU',
        'nav_home': 'Home',
        'nav_about': 'About Us',
        'nav_contact': 'Contact Us',
        'nav_policies': 'Policies',
        'nav_kg': 'KG Section',
        'nav_primary': 'Primary Section',
        'nav_secondary': 'Secondary Section',

        'hero_title_1': 'Global thinkers.',
        'hero_title_2': 'Engaged leaders.',
        'hero_title_3': 'Investing in knowledge.',
        'secondary_title': 'Secondary Section (Grades 6-12)',
        'secondary_subtitle': 'High School Years',
        'secondary_desc': 'Emphasizing academic excellence, leadership, and character development to prepare students for higher education and real-world challenges.',
        'middle_school_title': 'Middle School (Grades 6-8)',
        'middle_school_desc': 'Our Middle School curriculum is designed to bridge the gap between primary education and the rigors of high school. We focus on developing independent learners who can think critically and communicate effectively.',
        
        'kg_title': 'KG Section (KG 1 - KG 3)',
        'kg_subtitle': 'Early Years Foundation',
        'kg_desc': 'Nurturing curiosity and a love for learning through a playful, supportive, and engaging environment specifically designed for our youngest learners.',
        'kg_philosophy_title': 'Our Philosophy',
        'kg_philosophy_desc': 'We believe that every child is unique and has the potential to achieve greatness. Our Early Years Foundation Stage (EYFS) inspired curriculum focuses on the holistic development of the child.',
        'kg_areas_title': 'Key Learning Areas',
        'kg_area1': 'Communication and Language',
        'kg_area2': 'Physical Development',
        'kg_area3': 'Personal, Social and Emotional Development',
        'kg_area4': 'Literacy & Mathematics',
        
        'primary_title': 'Primary Section (Grades 1-5)',
        'primary_subtitle': 'Elementary Years',
        'primary_desc': 'Focusing on building strong academic foundations while nurturing creativity, curiosity, and moral values.',
        'primary_journey_title': 'A Journey of Discovery',
        'primary_journey_desc': 'Our Primary Section aims for holistic growth in academic, moral, and social dimensions. Through engaging lessons, activities, and individual attention, students develop critical thinking, communication, and problem-solving skills.',
        'primary_subjects_title': 'Core Subjects',
        'subject_language': 'Language Arts',
        'subject_math': 'Mathematics',
        'subject_science': 'Science & Tech',
        'subject_arts': 'Arts & Culture',
        'primary_heritage_desc': 'Arabic and Islamic Studies are integrated from the start, ensuring that our students remain connected to their cultural and spiritual heritage while receiving a world-class international education.',

        'mansoura_title': 'Al Mansoura Branch',
        'mansoura_subtitle': 'Where Excellence Takes Root',
        'mansoura_desc': 'Our flagship campus in Riyadh, providing world-class education since 2014.',
        'branch_flagship': 'Our Flagship Campus',
        'mansoura_detailed_desc': 'Success International Schools has a well-appointed campus in the Al Mansoura District in Riyadh, Saudi Arabia. Our flagship branch has been serving the community since 2014 with a world-class education for boys and girls from Pre-K through Grade 12.',
        'mansoura_history': 'The Al-Mansoura campus is the birthplace of the SIS vision — offering a curriculum rooted in the American and British frameworks with technology-enabled, holistic learning environments.',
        'apply_admission': 'Apply for Admission',
        'get_directions': 'Get Directions',
        'established': 'Established',
        'founded': 'Founded',
        'students': 'Students',
        'nationalities': 'Nationalities',
        'prek_to_grade12': 'Pre-K to Grade 12',
        'world_class_facilities': 'World-Class Facilities',
        'campus_highlights': 'Campus Highlights',
        'find_us': 'Find Us',
        'address': 'Address',
        'phone': 'Phone',
        'email': 'Email',
        'begin_journey_mansoura': 'Begin Your Journey at Al-Mansoura',
        'mansoura_cta_desc': 'Apply today and secure your child\'s place at our flagship campus — where generations of success have been built since 2014.',

        'munawwara_title': 'Al Munawwara Branch',
        'munawwara_subtitle': 'Nurturing Future Leaders',
        'munawwara_desc': 'A vibrant community focused on academic achievement and personal growth.',
        'munawwara_detailed_desc': 'Our Al Munawwara branch offers a vibrant learning environment with a focus on academic excellence and character development for students of all ages.',
        'munawwara_history': 'Established to meet the growing demand for quality education in Riyadh, this branch continues the SIS legacy of excellence.',
        'begin_journey_munawwara': 'Begin Your Journey at Al-Munawwara',
        'munawwara_cta_desc': 'Join our growing community at the Al Munawwara branch and give your child the foundation they deserve.',

        'rabia_title': 'Ar Rabia Branch',
        'rabia_subtitle': 'Innovation in Education',
        'rabia_desc': 'Our newest facility, featuring state-of-the-art technology and modern learning spaces.',
        'rabia_detailed_desc': 'The Ar Rabia branch provides a modern, tech-forward education that prepares students for the challenges of the 21st century.',
        'rabia_history': 'Our newest branch, Ar Rabia, features state-of-the-art facilities and a curriculum designed for future leaders.',
        'begin_journey_rabia': 'Begin Your Journey at Ar Rabia',
        'rabia_cta_desc': 'Experience the future of education at our Ar Rabia branch. Admissions are now open for all grades.',
        'leadership_title': 'Our Leadership',
        'leadership_subtitle': 'Guided by a vision of excellence and a commitment to nurturing the leaders of tomorrow.',
        'leader_read_more': 'Read More',

        'footer_desc': 'Inspiring global thinkers and engaged leaders for over 10 years, fostering excellence in education across our branches.',
        'footer_apply': 'Apply Now',
        'footer_get_in_touch': 'Get In Touch',
        'footer_quick_links': 'Quick Links',
        'footer_rights': '© 2026 Success International School. All rights reserved.',
        
        'search_placeholder': 'Search the website...',
        'search_close': 'Close',

        'enquire_now': 'Enquire Now',
        'enquire_admission': 'Enquire for Admission',

        // Secondary Section
        'high_school_title': 'High School (Grades 9-12)',
        'high_school_desc': 'High School at SIS is the culmination of the educational journey. We emphasize college and university preparation, student-led learning, and 21st-century global citizenship.',
        'pathways_title': 'Pathways to Success:',
        'skills_title': '21st Century Skills',
        'skills_desc': 'At SIS, we integrate Coding, Robotics, and AI into our secondary education, ensuring our students are not just consumers of technology, but creators and innovators.',
        'middle_school_feature1': 'Broad range of academic subjects including Saudi History and Geography.',
        'middle_school_feature2': 'Focus on social-emotional learning and peer collaboration.',

        // Admission Page
        'admission_title': 'Admissions',
        'admission_subtitle': 'Your Future Begins Here',
        'admission_journey_title': 'The Admission Journey',
        'admission_journey_desc': 'We follow a transparent and nurturing assessment process to ensure every student finds their right place in our community.',
        'step1_title': 'Submit Application Form',
        'step1_desc': 'Complete and submit the application form online or in person.',
        'step2_title': 'Review of Documents',
        'step2_desc': 'Our admissions team will review the submitted documents and academic records.',
        'step3_title': 'Entrance Assessments',
        'step3_desc': 'Depending on the grade level, students may be required to undergo entrance assessments.',
        'step4_title': 'Interview',
        'step4_desc': 'An interview with the student and parent(s) may be conducted to understand their goals.',
        'step5_title': 'Acceptance',
        'step5_desc': 'Once all requirements are met, the student will be notified of their acceptance.',
        'docs_title': 'Required Documents',
        'eligibility_title': 'Eligibility Criteria by Grade',
        'tests_title': 'Entrance Tests & Interviews',
        'fees_title': 'Tuition Fees & Payment Plans',
        'inquiry_title': 'Admission Inquiry',
        'label_student_name': 'Student Name',
        'label_grade': 'Grade Applying For',
        'label_parent_name': 'Parent/Guardian Name',
        'label_phone': 'Phone Number',
        'label_notes': 'Additional Notes',
        'btn_submit': 'Submit Application',

        // Careers Page
        'careers_title': 'Careers',
        'careers_inspire_title': 'Inspire the Next Generation',
        'careers_inspire_desc': 'We are always looking for passionate educators and professionals who are dedicated to excellence and innovation.',
        'careers_vacancies_title': 'Current Vacancies',
        'careers_vacancies_desc': 'Immediate opportunities across our academic and support departments.',
        'job_apply': 'Apply',
        'job_urgent': 'Urgent',

        // Policies Page
        'policies_title': 'Policies',
        'policies_subtitle': 'School Governance & Standards',
        'policy_student_protection': 'Student Protection Policy',
        'policy_curriculum': 'Curriculum Policy',
        'policy_health_safety': 'Health & Safety Policy',
        'policy_ims_iso': 'View IMS Policy & ISO Standards',
        'policy_standards_cert': 'Looking for Standards & certifications?',

        // Contact Page
        'contact_title': 'Contact Us',
        'contact_mansoura_title': 'Al Mansourah Branch',
        'contact_rabi_title': 'Al-Rabi Branch',
        'contact_label_arabic': 'Arabic',
        'contact_label_english': 'English',
        'contact_label_contacts': 'Contacts',
        'contact_label_mail': 'Mail'
    },
    'ar': {
        'nav_translate': 'ترجمة',
        'nav_arabic': 'العربية',
        'nav_english': 'الإنجليزية',
        'nav_quick_links': 'روابط سريعة',
        'nav_admissions': 'القبول',
        'nav_careers': 'الوظائف',
        'nav_gallery': 'المعرض',
        'nav_branches': 'الفروع',
        'nav_mansoura': 'فرع المنصورة',
        'nav_munawwara': 'فرع المنورة',
        'nav_rabia': 'فرع الربيع',
        'nav_search': 'بحث',
        'nav_menu': 'القائمة',
        'nav_home': 'الرئيسية',
        'nav_about': 'من نحن',
        'nav_contact': 'اتصل بنا',
        'nav_policies': 'السياسات',
        'nav_kg': 'قسم الروضة',
        'nav_primary': 'القسم الابتدائي',
        'nav_secondary': 'القسم الثانوي',

        'hero_title_1': 'مفكرون عالميون.',
        'hero_title_2': 'قادة مشاركون.',
        'hero_title_3': 'نستثمر في المعرفة.',
        'hero_cta': 'اقرأ المزيد',

        'secondary_title': 'القسم الثانوي (الصف السادس - الثاني عشر)',
        'secondary_subtitle': 'سنوات المدرسة الثانوية',
        'secondary_desc': 'التأكيد على التميز الأكاديمي والقيادة وتنمية الشخصية لإعداد الطلاب للتعليم العالي وتحديات العالم الحقيقي.',
        'middle_school_title': 'المدرسة المتوسطة (الصف السادس - الثامن)',
        'middle_school_desc': 'تم تصميم منهج المدرسة المتوسطة لدينا لسد الفجوة بين التعليم الابتدائي وصرامة المدرسة الثانوية. نحن نركز على تطوير المتعلمين المستقلين الذين يمكنهم التفكير بشكل نقدي والتواصل بفعالية.',

        'kg_title': 'قسم الروضة (الروضة 1 - الروضة 3)',
        'kg_subtitle': 'مؤسسة السنوات الأولى',
        'kg_desc': 'رعاية الفضول وحب التعلم من خلال بيئة مرحة وداعمة وجذابة مصممة خصيصاً لأصغر المتعلمين لدينا.',
        'kg_philosophy_title': 'فلسفتنا',
        'kg_philosophy_desc': 'نحن نؤمن بأن كل طفل فريد ولديه القدرة على تحقيق العظمة. يركز منهجنا المستوحى من مرحلة التأسيس للسنوات الأولى (EYFS) على التطوير الشامل للطفل.',
        'kg_areas_title': 'مجالات التعلم الرئيسية',
        'kg_area1': 'التواصل واللغة',
        'kg_area2': 'التطور البدني',
        'kg_area3': 'التطور الشخصي والاجتماعي والعاطفي',
        'kg_area4': 'محو الأمية والرياضيات',

        'primary_title': 'القسم الابتدائي (الصف الأول - الخامس)',
        'primary_subtitle': 'السنوات الابتدائية',
        'primary_desc': 'التركيز على بناء أسس أكاديمية قوية مع رعاية الإبداع والفضول والقيم الأخلاقية.',
        'primary_journey_title': 'رحلة اكتشاف',
        'primary_journey_desc': 'يهدف القسم الابتدائي لدينا إلى النمو الشامل في الأبعاد الأكاديمية والأخلاقية والاجتماعية. من خلال الدروس والأنشطة الجذابة والاهتمام الفردي، يطور الطلاب مهارات التفكير النقدي والتواصل وحل المشكلات.',
        'primary_subjects_title': 'المواد الأساسية',
        'subject_language': 'فنون اللغة',
        'subject_math': 'الرياضيات',
        'subject_science': 'العلوم والتكنولوجيا',
        'subject_arts': 'الفنون والثقافة',
        'primary_heritage_desc': 'يتم دمج الدراسات العربية والإسلامية منذ البداية، مما يضمن بقاء طلابنا على اتصال بتراثهم الثقافي والروحي مع تلقي تعليم دولي عالمي المستوى.',

        'mansoura_title': 'فرع المنصورة',
        'mansoura_subtitle': 'حيث يتجذر التميز',
        'mansoura_desc': 'حرمنا الرئيسي في الرياض، يقدم تعليماً عالمياً منذ عام 2014.',
        'branch_flagship': 'حرمنا الرئيسي',
        'mansoura_detailed_desc': 'تمتلك مدارس النجاح الدولية حرماً مدرسياً مجهزاً جيداً في حي المنصورة بالرياض، المملكة العربية السعودية. يخدم فرعنا الرئيسي المجتمع منذ عام 2014 بتعليم عالمي المستوى للبنين والبنات من مرحلة الروضة وحتى الصف الثاني عشر.',
        'mansoura_history': 'يعد حرم المنصورة مسقط رأس رؤية مدارس النجاح الدولية - حيث يقدم منهجاً متجذراً في الأطر الأمريكية والبريطانية مع بيئات تعلم شاملة مدعومة بالتكنولوجيا.',
        'apply_admission': 'طلب قبول',
        'get_directions': 'الحصول على الاتجاهات',
        'established': 'تأسست',
        'founded': 'تأسست',
        'students': 'طلاب',
        'nationalities': 'جنسية',
        'prek_to_grade12': 'من الروضة إلى الصف 12',
        'world_class_facilities': 'مرافق عالمية المستوى',
        'campus_highlights': 'أبرز معالم الحرم المدرسي',
        'find_us': 'تواصل معنا',
        'address': 'العنوان',
        'phone': 'الهاتف',
        'email': 'البريد الإلكتروني',
        'begin_journey_mansoura': 'ابدأ رحلتك في فرع المنصورة',
        'mansoura_cta_desc': 'قدم طلبك اليوم واحجز مقعد طفلك في فرعنا الرئيسي - حيث بُنيت أجيال من النجاح منذ عام 2014.',

        'munawwara_title': 'فرع المنورة',
        'munawwara_subtitle': 'تنشئة قادة المستقبل',
        'munawwara_desc': 'مجتمع حيوي يركز على التحصيل الأكاديمي والنمو الشخصي.',
        'munawwara_detailed_desc': 'يقدم فرع المنورة بيئة تعليمية حيوية مع التركيز على التميز الأكاديمي وتطوير الشخصية للطلاب من جميع الأعمار.',
        'munawwara_history': 'تأسس هذا الفرع لتلبية الطلب المتزايد على التعليم عالي الجودة في الرياض، ويواصل إرث التميز لمدارس النجاح الدولية.',
        'begin_journey_munawwara': 'ابدأ رحلتك في فرع المنورة',
        'munawwara_cta_desc': 'انضم إلى مجتمعنا المتنامي في فرع المنورة وامنح طفلك الأساس الذي يستحقه.',

        'rabia_title': 'فرع الربيع',
        'rabia_subtitle': 'الابتكار في التعليم',
        'rabia_desc': 'أحدث مرافقنا، التي تتميز بأحدث التقنيات ومساحات التعلم الحديثة.',
        'rabia_detailed_desc': 'يوفر فرع الربيع تعليماً حديثاً يعتمد على التكنولوجيا يجهز الطلاب لتحديات القرن الحادي والعشرين.',
        'rabia_history': 'يتميز أحدث فروعنا، فرع الربيع، بمرافق حديثة ومنهج مصمم لقادة المستقبل.',
        'begin_journey_rabia': 'ابدأ رحلتك في فرع الربيع',
        'rabia_cta_desc': 'اختبر مستقبل التعليم في فرع الربيع. باب القبول مفتوح الآن لجميع الصفوف.',

        'welcome_to': 'مرحباً بكم في',
        'welcome_desc': 'مدرسة سكسس العالمية (SIS) هي مدرسة دولية متميزة ذات رؤية عالمية. لقد أعد تدريسنا المبتكر ومناهجنا القوية الطلاب للمرحلة العالمية لأكثر من 10 سنوات.',

        'leadership_title': 'قيادتنا',
        'leadership_subtitle': 'مسترشدين برؤية التميز والالتزام برعاية قادة الغد.',
        'leader_read_more': 'اقرأ المزيد',

        'footer_desc': 'إلهام المفكرين العالميين والقادة المشاركين لأكثر من 10 سنوات، وتعزيز التميز في التعليم عبر فروعنا.',
        'footer_apply': 'قدم الآن',
        'footer_get_in_touch': 'تواصل معنا',
        'footer_quick_links': 'روابط سريعة',
        'footer_rights': '© 2026 مدرسة سكسس العالمية. جميع الحقوق محفوظة.',
        
        'search_placeholder': 'ابحث في الموقع...',
        'search_close': 'إغلاق',

        'enquire_now': 'استفسر الآن',
        'enquire_admission': 'استفسار للقبول',

        // Secondary Section
        'high_school_title': 'المدرسة الثانوية (الصف 9-12)',
        'high_school_desc': 'المرحلة الثانوية في مدرسة سكسس العالمية هي ذروة الرحلة التعليمية. نحن نؤكد على الاستعداد للكلية والجامعة، والتعلم الذي يقوده الطلاب، والمواطنة العالمية في القرن الحادي والعشرين.',
        'pathways_title': 'مسارات النجاح:',
        'skills_title': 'مهارات القرن الحادي والعشرين',
        'skills_desc': 'في مدرسة سكسس العالمية، ندمج البرمجة والروبوتات والذكاء الاصطناعي في تعليمنا الثانوي، مما يضمن أن طلابنا ليسوا مجرد مستهلكين للتكنولوجيا، بل مبدعين ومبتكرين.',
        'middle_school_feature1': 'مجموعة واسعة من المواد الأكاديمية بما في ذلك تاريخ وجغرافيا المملكة العربية السعودية.',
        'middle_school_feature2': 'التركيز على التعلم الاجتماعي والعاطفي والتعاون بين الأقران.',

        // Admission Page
        'admission_title': 'القبول والتسجيل',
        'admission_subtitle': 'مستقبلك يبدأ من هنا',
        'admission_journey_title': 'رحلة القبول',
        'admission_journey_desc': 'نتبع عملية تقييم شفافة وداعمة لضمان حصول كل طالب على المكان المناسب في مجتمعنا.',
        'step1_title': 'تقديم نموذج الطلب',
        'step1_desc': 'أكمل وقدم نموذج الطلب عبر الإنترنت أو شخصياً.',
        'step2_title': 'مراجعة المستندات',
        'step2_desc': 'سيقوم فريق القبول لدينا بمراجعة المستندات المقدمة والسجلات الأكاديمية.',
        'step3_title': 'تقييمات القبول',
        'step3_desc': 'اعتماداً على مستوى الصف، قد يُطلب من الطلاب الخضوع لتقييمات القبول.',
        'step4_title': 'المقابلة الشخصية',
        'step4_desc': 'قد يتم إجراء مقابلة مع الطالب وولي الأمر لفهم أهدافهم.',
        'step5_title': 'القبول النهائي',
        'step5_desc': 'بمجرد استيفاء جميع المتطلبات، سيتم إخطار الطالب بقبوله.',
        'docs_title': 'المستندات المطلوبة',
        'eligibility_title': 'معايير الأهلية حسب الصف',
        'tests_title': 'اختبارات القبول والمقابلات',
        'fees_title': 'الرسوم الدراسية وخطط الدفع',
        'inquiry_title': 'استفسار عن القبول',
        'label_student_name': 'اسم الطالب',
        'label_grade': 'الصف المتقدم له',
        'label_parent_name': 'اسم ولي الأمر',
        'label_phone': 'رقم الهاتف',
        'label_notes': 'ملاحظات إضافية',
        'btn_submit': 'إرسال الطلب',

        // Careers Page
        'careers_title': 'الوظائف',
        'careers_inspire_title': 'إلهام الجيل القادم',
        'careers_inspire_desc': 'نحن نبحث دائماً عن معلمين ومحترفين شغوفين مكرسين للتميز والابتكار.',
        'careers_vacancies_title': 'الوظائف الشاغرة الحالية',
        'careers_vacancies_desc': 'فرص فورية عبر أقسامنا الأكاديمية والإدارية.',
        'job_apply': 'تقديم',
        'job_urgent': 'عاجل',

        // Policies Page
        'policies_title': 'السياسات',
        'policies_subtitle': 'حوكمة المدرسة ومعاييرها',
        'policy_student_protection': 'سياسة حماية الطالب',
        'policy_curriculum': 'سياسة المنهج الدراسي',
        'policy_health_safety': 'سياسة الصحة والسلامة',
        'policy_ims_iso': 'عرض سياسة نظام الإدارة المتكامل ومعايير الأيزو',
        'policy_standards_cert': 'هل تبحث عن المعايير والشهادات؟',

        // Contact Page
        'contact_title': 'اتصل بنا',
        'contact_mansoura_title': 'فرع المنصورة',
        'contact_rabi_title': 'فرع الربيع',
        'contact_label_arabic': 'اللغة العربية',
        'contact_label_english': 'اللغة الإنجليزية',
        'contact_label_contacts': 'جهات الاتصال',
        'contact_label_mail': 'البريد الإلكتروني'
    }
};

function setLanguage(lang) {
    localStorage.setItem('preferredLanguage', lang);
    applyLanguage(lang);
}

function applyLanguage(lang) {
    const html = document.documentElement;
    const isAr = lang === 'ar';
    
    html.setAttribute('lang', lang);
    html.setAttribute('dir', isAr ? 'rtl' : 'ltr');
    
    if (isAr) {
        document.body.classList.add('lang-ar');
        document.body.classList.remove('lang-en');
    } else {
        document.body.classList.add('lang-en');
        document.body.classList.remove('lang-ar');
    }

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else if (el.tagName === 'SELECT') {
                // For select, we might want to translate the first option (placeholder)
                if (el.options[0]) el.options[0].textContent = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });

    // Update custom fonts or layout if needed via JS
    console.log(`Language applied: ${lang}`);
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    applyLanguage(savedLang);
});
