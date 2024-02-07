module.exports = async function myPlugin(context, options) {
    // ...
    return {
      name: 'category-listing',
      async loadContent() {
      },
      async contentLoaded({content, actions, allContent}) {
        const {setGlobalData, addRoute} = actions;
        const allVersions = allContent['docusaurus-plugin-content-docs']['default']['loadedVersions'];
        allVersions.forEach(version => {
            const docs = version.docs;


            // build the mapping of tags to docs
            const tagToDocMap = {};
            docs.forEach(doc => {
	            //console.log(JSON.stringify(doc));
                const tagNames = doc.tags.map(t => t.label);
                tagNames.forEach(tn => {
                    const collection = tagToDocMap[tn] ?? [];

                    const shortForm = {
                        title: doc.title,
                        permalink: doc.permalink,
                        description: doc.description,
                        order: doc.sidebarPosition ?? 0,
                        tags: doc.tags,
                        frontMatter: doc.frontMatter,
                    }

                    collection.push(shortForm);
                    tagToDocMap[tn]=collection;
                })    
            });
            
            //console.log(JSON.stringify(tagToDocMap))

            // add the mapping to global data
            setGlobalData(tagToDocMap)
        })
      },
      /* other lifecycle API */
    };
  };