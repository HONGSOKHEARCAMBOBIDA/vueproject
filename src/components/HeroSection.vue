<template>
  <section class="hero">
   <img src="/vueproject/bo.jpg" alt="Loan Service" class="hero-image" />

    <div class="hero-text">
      <h2>សូមស្វាគមន៍មកកាន់ក្រុមហ៊ុន កាក់ ឯ.ក</h2>
      <p>
        យើងផ្តល់សេវាកម្មឥណទានយ៉ាងលឿន និងមានភាពទុកចិត្ត ដែលមានអត្រាការប្រាក់សមរម្យ
        ដើម្បីជួយឱ្យអតិថិជនទទួលបានប្រាក់កម្ចីយ៉ាងងាយស្រួល និងមានសុវត្ថិភាព។
      </p>
      <p>
        ក្រុមហ៊ុនយើងខ្ញុំមានបទពិសោធន៍ជាច្រើនឆ្នាំក្នុងការផ្តល់ប្រាក់កម្ចីសម្រាប់តម្រូវការផ្ទាល់ខ្លួន និងអាជីវកម្ម
        ជាមួយនឹងដំណោះស្រាយបត់បែន និងគាំទ្រអតិថិជនក្នុងការសងប្រាក់យ៉ាងងាយស្រួល។
      </p>
      <p>
        យើងខិតខំផ្តល់សេវាកម្មដោយភាពរហ័សរហួន ទំនុកចិត្ត និងការគាំទ្រជាប្រចាំ ដើម្បីឱ្យអ្នកអាចសម្រេចបានគោលបំណងហិរញ្ញវត្ថុរបស់អ្នក។
      </p>
    </div>
  </section>
</template>

<style scoped>
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 20px;
  background: #f3f3f3;
  color: #222;
  font-family: 'Siemreap', sans-serif;
  gap: 40px;
  flex-wrap: nowrap; /* prevent wrapping of flex items */
}

.hero-image {
  margin-right: 120px;            /* generous spacing to the right */
  max-width: 350px;               /* max width to keep image from growing too large */
  width: 100%;                   /* make image responsive within max-width */
  height: auto;                  /* maintain aspect ratio */
  border-radius: 12px;           /* slightly rounded corners for a softer look */
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);  /* a bit stronger, softer shadow */
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* smooth hover effects */
  cursor: pointer;               /* indicates image is interactive (optional) */
}

/* Optional: add a subtle hover effect */
.hero-image:hover {
  transform: scale(1.05);       /* slight zoom on hover */
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25); /* stronger shadow */
}

/* Responsive tweak: reduce margin on smaller screens */
@media (max-width: 768px) {
  .hero-image {
    margin-right: 40px;          /* less margin on tablets */
    max-width: 280px;            /* slightly smaller image */
  }
}

@media (max-width: 480px) {
  .hero-image {
    margin-right: 0;             /* remove right margin on phones */
    max-width: 100%;             /* full width on very small screens */
    border-radius: 8px;          /* slightly smaller radius */
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  }
}


.hero-text {
  margin: 20px;
  max-width: 800px;
}
.hero-text h2 {
  color: #003366;
  margin: 40px 0;      /* 40px top and bottom, 0 left and right */
  padding: 10px 20px;  /* 10px top/bottom and 20px left/right */
  font-size: 2.5rem;

  white-space: nowrap;       
  overflow: hidden;          
  text-overflow: ellipsis;   
}


.hero-text p {
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 15px;
}
</style>
