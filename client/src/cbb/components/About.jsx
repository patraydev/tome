function About(props) {

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
      <h2>an <strong>opinionated</strong> cocktail database builder</h2>
       <p>Hi, glad you could make it. Pat Ray here, formerly bar manager of The Violet Hour, Chicago. This is a tool that I developed to translate the 1000+ cocktail builds that I inherited when I took over the VH cocktail program. The menus were laid out in subtly different formats and schemas (different structures, document types, methodologies, etc. for each previous bar manager), and my goal was to coalesce this source material into a singular, unified database structure. This was my prerequisite for working with or arranging the data into something more useful/accessible (i.e.putting together an in-house searchable database that could live on a POS tablet). As of now, this incarnation of the CBB is connected via API and HTTP to airtable.com tables, but due to (arbitrary and capricious) size limit structures for their free service the back-end will have to wait for implementation of another platform to realize it's true potential. Until then, take this app as a proof-of-concept, with many of the features that will be present in the final product implemented with a static selection of VH menus. Drop me a line in the contact tab with questions, comments, concerns, or terrible jokes.</p>
        </div>
      </div>
      </div>
);
};

export default About; 