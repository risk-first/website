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
                const tagNames = doc.tags.map(t => t.label);
                const mitigates = (doc.frontMatter.practice?.mitigates ?? []).map(t => t.tag)
                const attendant = (doc.frontMatter.practice?.attendant ?? []).map(t => t.tag)
                const practices = (doc.frontMatter.method?.practices ?? []).map(t => t.tag)
                const partOf = doc.frontMatter.part_of ? [doc.frontMatter.part_of] : []
                const title = doc.frontMatter.title
                
                const allTags = [...tagNames, ...mitigates, ...attendant, ...practices, ...partOf, title]
                
                //console.log(JSON.stringify(allTags));
                
                allTags.forEach(tn => {
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