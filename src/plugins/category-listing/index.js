module.exports = async function myPlugin(context, options) {
    // ...
    return {
      name: 'category-listing',
      async allContentLoaded({actions, allContent}) {
        const {setGlobalData, addRoute} = actions;
        const allVersions = allContent['docusaurus-plugin-content-docs']['default']['loadedVersions'];
        allVersions.forEach(version => {
            const docs = version.docs;

			// docs.forEach(d => console.log(d))
			
			function onlyUnique(value, index, array) {
 				return array.indexOf(value) === index;
			}

            // build the mapping of tags to docs
            const tagToDocMap = {};
            docs.forEach(doc => {
                const tagNames = doc.tags.map(t => t.label);
                const mitigates = (doc.frontMatter.practice?.mitigates ?? []).map(t => t.tag)
                const attendant = (doc.frontMatter.practice?.attendant ?? []).map(t => t.tag)
                const practices = (doc.frontMatter.method?.practices ?? []).map(t => t.tag)
                const partOf = doc.frontMatter.part_of ? [doc.frontMatter.part_of] : []
                const title = doc.frontMatter.title
                
                // Gemara support
                const gemara = doc.frontMatter.gemara ?? {}
                const gemaraFamily = gemara.family ? [gemara.family] : []
                const gemaraCapabilities = (gemara.capabilities ?? []).map(c => c['reference-id']).filter(Boolean)
                const gemaraThreatMappings = (gemara['threat-mappings'] ?? []).map(t => t['reference-id']).filter(Boolean)
                const gemaraExternalMappings = (gemara['external-mappings'] ?? []).map(e => e['reference-id']).filter(Boolean)
                
                const allTags = [
                    ...tagNames, 
                    ...mitigates, 
                    ...attendant, 
                    ...practices, 
                    ...partOf,
                    ...gemaraFamily,
                    ...gemaraCapabilities,
                    ...gemaraThreatMappings,
                    ...gemaraExternalMappings
                ].filter(onlyUnique)
                
                const isRisk = allTags.includes("Risks") 
                const isAIThreat = allTags.includes("AI Risks")
                const isAgenticThreat = allTags.includes("Threat")
                const isPractice = allTags.includes("Practice")
                const isAgenticControl = allTags.includes("Control")
                const isCapability = allTags.includes("Capability")
                const isMethod  = allTags.includes("Risk Frameworks")
                
                if (!allTags.includes(title)) {
					if (isRisk || isPractice || isMethod || isAIThreat || isAgenticThreat || isAgenticControl || isCapability) {
						console.warn(`${doc.title} is not self-tagged risk=${isRisk} practice=${isPractice} agenticThreat=${isAgenticThreat} agenticControl=${isAgenticControl} capability=${isCapability} tags=${JSON.stringify(allTags)}`)
					}
				}
				
				
                
                //console.log(JSON.stringify(allTags));
                
                allTags.forEach(tn => {
                    const collection = tagToDocMap[tn] ?? [];

                    const shortForm = {
                        title: doc.title,
                        permalink: doc.permalink,
                        description: doc.description,
                        order: doc.sidebarPosition ?? 0,
                        tags: doc.tags,
                        isRisk,
                        isPractice,
                        isMethod,
                        isAIThreat,
                        isAgenticThreat,
                        isAgenticControl,
                        isCapability,
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