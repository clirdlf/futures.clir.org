---
layout: article.njk
articleStyle: feature
title: "Sacred Geographic Superimpositions: Reimagining Public Art, For Us By Us, as Enshrined Spaces"
author: Synatra A. Smith
affiliation: Library and Archives, Philadelphia Museum of Art and the Loretta C. Duckworth Scholars Studio, Temple University Libraries
date: 2023-05
order: 3
topics: [mapping, augmented reality, photogrammetry, Afrofuturism]
excerpt: >-
 Through photogrammetry, I have created three-dimensional models of public art by Black artists in Philadelphia organized into an interactive mapping visualization with augmented reality content. Since its inception, Sacred Geographic Superimpositions has expanded into a virtual collage of local public artworks, African sculptures and instruments from the Philadelphia Museum of Art and Temple University Libraries Charles L. Blockson Afro-American Collection, and spiritual and metaphysical items in order to transform each included outdoor sculpture and mural into altars adorned with the latter elements. This project is a spiritual scholarly endeavor to document and celebrate ephemeral Black public art in Philadelphia in a manner that transports them into the ancestral plane of the “transformative archive” to bring scholarly research and data curation out of the academy into a curated space grounded in storytelling and interpretation.
hero: /assets/3.-Smith-Featured-e1683224979392.jpg
articleHero: /assets/3.-Smith-Background.jpg
permalink: /sacred-geographic-superimpositions/
---

<section class="article-section article-section--overview">
{% markdown %}
This project was developed out of separate projects to explore story mapping as a method to build digital exhibits, learn the photogrammetric workflow to generate three-dimensional models of outdoor sculptures, and use linked open data and three-dimensional modeling to bring greater digital visibility to the collection of African sculptures in the European paintings and sculpture department at the Philadelphia Museum of Art (museum). Over time, these projects merged together and expanded into _Sacred Geographic Superimpositions_ as a way to develop a methodology that takes advantage of these easily accessible tools (and not so easy to develop skill sets) strictly for the purpose of curating Black material culture in a digital space. 

When I decided to include the African sculpture three-dimensional models, a data set that expanded to include African instruments from the Temple University Libraries Charles L. Blockson Afro-American Collection (Blockson Collection), as superimposed, interactive augmented reality assets I began to consider the role of speculative digital curation within my work as a gallery, library, archives, and museum (GLAM) professional. On the conceptual side, this project has allowed me to crystallize my own specific Afrofuturist data curation practice. In her discussion of augmented space, digital artist and cultural critic Nettrice R. Gaskins explains, “Afrofuturism, in its many forms, engages directly with audiences and subtly influences us, through the layering of text, images, and sound” (2016, p. 39). She further explains, “Artists and designers can interrogate the dynamic between creative expression and information as well as how these aspects might function differently in today’s digital culture” (p. 40). Gaskins’s discussion of layering images and negotiating between creativity and knowledge production coupled with feminist and queer theory scholars Alexis Lothian and Amanda Phillips’s (2013) discussion of the role of transformative artistic production that blurs the line between art and critical knowledge production as practitioners engage with digital media creates space for such a project. In this article and the project at large, I have been clear about the boundary between material culture that exists in mapped geographic space and curated elements to expand the experience to include other objects that exist in other physical spaces both tangibly (i.e., objects from specific institutional collections) and conceptually (i.e., objects that do exist in reality but were not necessarily in my possession) to avoid any confusion on the part of the user. As such, the line between these sets of objects is not completely blurred but the project does embrace incorporating them all into a singular space. 

According to interdisciplinary scholar of library and information science André Brock’s (2018) discussion of critical technoculture discourse analysis (CTDA), the relationship between the tool, the user, and the way the tool is used are necessary to interrogate because all three are informing each other. Additionally, a CTDA-based examination of interface is critical to the examination of the technology itself considering that is how users interact. As I developed the interactive component of this project, I considered the way users typically engage with augmented reality as a location-based mobile technology to read and write space where mobile annotation impacts net locality or the user’s social experience in physical space as it is transformed. Generally speaking, augmented reality impacts the way users perceive and interact with a space since “finding a location no longer means only finding geographic coordinates but also accessing an abundance of digital information that belongs to that location. It means engaging with digital information and experiencing new forms of mobilities and textualities” (de Souza e Silva, 2013, p. 51). I selected the image tracking option instead because I wanted to share this project beyond local users in Philadelphia, which resulted in the need to develop clear instructions on the story map website that pulled from the familiar place of using QR codes to access restaurant menus during the COVID-19 pandemic. According to digital research and scholarship librarian Markus Wust, there are three characteristics of augmented reality where users are able to interact with the virtual and physical world: “(1) they combine the real and the virtual; (2) they are interactive in real time; and (3) they are registered in three-dimensional space” (Wust, 2016, p. 303.). This project meets these three criteria through the combination of the mapping visualization to represent physical space and the augmented reality interactive component with models that are triggered through image tracking. 

In addition to Afrofuturist data curation, poet, musician, and activist Moor Mother Goddess (2015) proposed a framework for the “Anthropology of Consciousness…to explain how we calculate the relationship between space and our bodies, our living spaces and the ways in which these things affect the way we remember or forget our past and future memories” that speaks to my work. Not only am I coincidentally an anthropologist by training, but also in a more general sense this sentiment alongside Gaskins’s description of the relationship between Afrofuturism and audiences guides the way I practice data curation: I do not only analyze or curate artwork from a conceptual perspective and manage the data lifecycle over time, but I also create data based on existing physical objects and produce new artistic content to virtually subvert ephemerality and guide future memories. I decided which objects were eligible for inclusion, how they would be included, what information about them would be shared, and how all of this data would ultimately be presented in the project. I personally have anecdotal memories of collecting the data, conversations I had with colleagues about the progress I was making, or at some moments the lack thereof, as well as the kind of assistance I needed, and justifications for many of the decisions I made along the way as I tried to stay flexible about the possible pathways. While these memories may not be included formally in the project or this text, they certainly influence the way I have and will continue to speak about my work and the role of Afrofuturism as a conceptual framework for the application of digital humanities tools.
{% endmarkdown %}
</section>

<section class="article-section article-section--tint">
{% markdown %}

## Project Overview and Theoretical Grounding

<div class="zigzag zigzag--orange" aria-hidden="true"></div>

There are an estimated 1,500 outdoor sculptures and 3,600 murals in the city of Philadelphia, but as explained later in this text, those artworks can often be in flux as some were installed as intentionally temporary and others have been removed for a variety of reasons. Through photogrammetry, I have created three- dimensional models of eight outdoor sculptures and sixteen murals, as well as eight African sculptures from the museum and sixteen African instruments from the Blockson Collection. These models have been organized into a story map with an accompanying augmented reality iOS mobile application. In an effort to limit the scope of this project to become both manageable and politically aligned with my work, I elected to apply the “for us, by us” model and focus exclusively on a representative sample of outdoor sculptures and murals by Black artists. Herein lies an exploration of digital curation in my work. Asserting our agency to represent ourselves for ourselves as practitioners, interpreters, artmakers, and beyond provides the opportunity to develop a “transformative cultural philosophy of Black enactment—rather than representation of performance—along with technical expertise, politics, and everyday life, all mediated by technology” (Brock 2020, 14; see also Dery, 1994; McPherson, 2012; Higgin, 2009). My positioning as a Black scholar working within African American Studies to preserve Black art falls in line with this sentiment. Additionally, Afrofuturism lends itself to this approach as it is grounded in treating Black technocultural themes and concerns through a critical cultural lens that reconciles race, technology, and artmaking (Barber, 2018; Brock, 2018, 2020; Dery, 1994). Technology is often developed without Black people and other underrepresented groups in mind with limited compensation offered to those users from these groups who often spark the trends and applications that bring value to those same tools. 

Through my approach Blackness is not treated as just data, history, or discourse, but rather a living, changing thing based on our humanity throughout time that incorporates “the materiality, temporality, and meaning-making capacities of the Black digital and its practitioners as technological mediation of the Black ‘post-present’” (Brock, 2020, p. 8). As such, this project has expanded into a virtual collage of local public artworks, museum and library collections objects, and spiritual and metaphysical objects in order to transform each included outdoor sculpture and mural into altars adorned with the latter elements. I specifically chose altars as the superimposed content based on my experience exploring the limitations and capabilities of various augmented reality tools, at which time I was waking up in the middle of the night trying to fit these metaphorical puzzle pieces together. I would sit in my living room near a coffee table I had gradually transformed into my own altar draped in a backless pillow sham from scraps of African fabric my deceased maternal grandmother quilted adorned with photos of family and friends, plants, a study Bible, crystals, candles, an abalone shell with white sage and palo santo, a sculpture my mother’s oldest sister sent to me, and other sentimental objects. On some sleepless night when I gazed over at that table over in the corner I suddenly found the inspiration for how to bring this project together in a manner that blended my practical goals (i.e., developing a project that combines photogrammetry, mapping, and augmented reality) with my artistic and curatorial imagination. Gaskins explains, “Augmented or layered space offers us new ways to map, view, encode, or decode traditional cultural systems and symbols with dynamically changing information, sometimes digital in form and closely linked with the development of a techno-cultural network” (Gaskins, 2016, p. 28). As such, this project specifically applies Gaskins’s (2016) techno-vernacular creative method of reappropriation via reclamation and adaptation through the application of image-based tracking to superimpose the aforementioned altars onto photographs of each public artwork within a mapping visualization.

In what follows, I outline the processes and tools utilized to develop this project in an effort to share a methodological approach that centers not only Black scholarship but also the needs of Black institutions. Lothian and Phillips (2013) call for a more equitable application of digital humanities tools that subverts the way the field has historically privileged “certain gendered, racialized, classed, able-bodied, Western-centric productions of knowledge.” Digital humanities librarians often prioritize open-access data models using open-source tools to encourage equitable access, yet the field remains largely white at a rate of 71% for staff and 82% for librarians (Johnson et al., 2021). As a GLAM professional who entered the field at a small, Black institution with limited resources and capacity, my intention is to share my application of free and low-cost tools so that other GLAM professionals at small institutions with limited support for technology-centered data curation projects might find this approach useful to share their own special collections and archival records.
{% endmarkdown %}
</section>

<section class="article-section article-section--overview article-section--mural-list">
{% markdown %}

## Establishing a Workflow to Generate Three-Dimensional Assets

<div class="zigzag zigzag--orange" aria-hidden="true"></div>

The data collection phase of this project began with identifying two primary data sources for public artworks. As noted above, there are over 1,500 outdoor sculptures in Philadelphia so that list had to be narrowed down to include only those sculpted by Black artists. First, a query for African American outdoor sculptures in Philadelphia through the Smithsonian American Art Museum’s Art Inventories Catalog produced twenty results. Out of those twenty outdoor sculptures, three were repeats, five were sculpted by non-Black artists, and I was unable to determine if two of them were sculpted by Black artists. Of the remaining ten, six were busts that are not on public display, I was unable to locate one, leaving three sculptures to be included in the project: _Nesaika_ (1976), _Three Figures_ (1984), and _A Quest for Parity: The Octavius V. Catto Memorial_ (2017). In addition to these three sculptures, there was another sculpture on the University of Pennsylvania campus by Simone Leigh, notably the only Black female artist included in this entire project, entitled _Brick House_ (2019). Later, I was made aware of the [Monumental Tour](https://monumentaltour.org/) traveling exhibition, which brought four additional outdoor sculptures as temporary installations to Philadelphia in October 2021 through January 2022: _All Power to All People_ (2017), _Big Wheel IV_ (n.d.), _Caliban’s Hands_ (n.d.), and _Kalief Browder: The Box_ (n.d.).

The next step in the data collection process involved identifying which of the city’s over 3,600 murals that fit the project scope would be included in the project. I reached out to Mural Arts Philadelphia, a local organization founded to create thousands of street murals to eradicate graffiti, and was provided with a packet with images of fifty-three murals that depict African Americans. Twenty-one of those murals were painted by Black artists and I was able to locate sixteen of them.

1. _AIDS Southwest_ (2005)
2. _A Celebration of Poetry_ (2004)
3. _Father Paul Washington and the Church of the Advocates_ (1991 and 2006)
4. _Freedom School_ (2002)
5. _Healing Walls: Inmates’_ _Journey_ (2004)
6. _Healing Walls: Victims’ Journey_ (2004)
7. _Malcolm X_ (2004)
8. _Mapping Courage_ (2008)
9. _Martin Luther King_ (2009)
10. _North Philadelphia Heroes_ (2002)
11. _Ode to West Philly_ (n.d.)
12. _Project HOME: The Steppers_ (1996)
13. _Story Tellers: Past, Present, Future, Forever_ (n.d.)
14. _The Time—The Place—The Sound_ (2006) 
15. _A Tribute to Urban Horsemen_ (2005)
16. _Tuskegee Airmen: They Met the Challenge_ (2008)

Some of these murals were painted by multiple artists, but as long as at least one of those artists was Black it was included in the project.<sup>1</sup> While there are certainly other public artworks in Philadelphia by Black artists, this data set is meant to be representative and not exhaustive. Additionally, this data source identification process supports my work as it demonstrates my larger project of celebrating these artworks which are often ephemeral; some works were unavailable and some were temporary.

<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@steamfrank/video/7083963404569906474" data-video-id="7083963404569906474" style="max-width: 605px;min-width: 325px" id="v46157966158637690"> <iframe title="Sacred Geographic Superimpositions TikTok video" name="__tt_embed__v46157966158637690" sandbox="allow-popups allow-popups-to-escape-sandbox allow-scripts allow-top-navigation allow-same-origin" src="https://www.tiktok.com/embed/v2/7083963404569906474?lang=en-US&amp;referrer=https%3A%2F%2Ffutures.clir.org%2Fsacred-geographic-superimpositions%2F" style="width: 100%; height: 739px; display: block; visibility: unset; max-height: 739px;"></iframe></blockquote>

*Figure 1 TikTok of a sneak peek into the mystical magical world of photogrammetry.*

In order to generate the models of each outdoor sculpture and mural, three techniques were applied. First, I used traditional photogrammetry (Figure 1) to generate the outdoor sculpture models. Using a Canon EOS 60D camera on a six foot camera stand, I captured photographs of each sculpture according to this workflow:

1. Set the camera at the highest position on the stand and take portrait-oriented photographs of the sculpture while moving around the object with about a sixty percent overlap between each photograph.
2. Reposition the camera stand down to mid-level and capture landscape-oriented photographs around the object.
3. Re-position the camera stand to a height where it can be tilted upward at the sculpture to capture the bottom angle and rotate the camera to the opposite portrait orientation to take another round of photographs. 

The number of photographs captured through this process varied depending on the size of the sculpture, but the general range was seventy-five to 150 photographs. Also, for some sculptures additional angles were captured when deemed necessary. 

After photographing all of the sculptures, the photographs were converted from CR2 files (Canon’s version of RAW files) to .jpg so that the [Agisoft Metashape](https://www.agisoft.com/) photogrammetric processing software program could read the files according to the software’s workflow: 

1. Add photos.
2. Align photos.
3. Build the dense cloud.
4. Build the mesh.
5. Build the texture
6. Export the model with the texture in .jpg or .png format. 

At the align and dense cloud steps, I removed any points not associated with the sculpture, such as the environment around it and pedestrians who passed by while I was capturing the images, so that the model that was produced at the mesh and texture steps reflected the sculpture as exactly as possible.<sup>2</sup> Some of the models were imported into the [Blender](https://www.blender.org/) three-dimensional computer graphics software program for additional editing.<sup>3</sup> The _Kalief Browder: The Box_ model<sup>4</sup> was generated completely in Blender because the transparent material used in the actual sculpture would not allow for photogrammetric processing. Instead, I downloaded images that matched the variety of surfaces on the sculpture, I used [Canva](https://canva.com) to replicate the etching on the sides of it, and built the model completely from scratch. 

In order to generate the mural models, I used the [Polycam LiDAR 3D Scanner](https://poly.cam/) mobile application on an iPad Pro which required a completely different third process. Due to the height of the murals, I was unable to use the LiDAR scanning feature and instead used the application’s feature that captures a number of photographs via the device’s camera as the user walks across the space, angling up and down along the way to ensure all corners of the mural were captured. The software generated models based on those photos and I downloaded the .jpg photographs and the .obj, .mtl, and .png model files. Those were imported into Blender, as well, to remove extraneous pieces from the model, like the sky and surrounding environment. I used this same method for the final two outdoor sculptures _Brick House_ and _Three Figures_<sup>5</sup>

<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@steamfrank/video/7112171536521514286" data-video-id="7112171536521514286" style="max-width: 605px;min-width: 325px" id="v49591079276706410">  <iframe title="Sacred Geographic Superimpositions TikTok video" name="__tt_embed__v49591079276706410" sandbox="allow-popups allow-popups-to-escape-sandbox allow-scripts allow-top-navigation allow-same-origin" src="https://www.tiktok.com/embed/v2/7112171536521514286?lang=en-US&amp;referrer=https%3A%2F%2Ffutures.clir.org%2Fsacred-geographic-superimpositions%2F" style="width: 100%; height: 739px; display: block; visibility: unset; max-height: 739px;"></iframe></blockquote>


_Figure 2 TikTok of 3D modeling the Three Figures (1984) sculpture by Joseph C. Bailey using the Polycam LiDAR 3D Scanner app._

When I returned to re-capture them using the Polycam LiDAR 3D Scanner mobile application instead of the formal photogrammetry setup. This was initially a test because I happened to pass by the _Brick House_ sculpture while I was on the University of Pennsylvania campus for a workshop and it turned out to work quite well with extremely low effort. I simply downloaded the mobile application to my iPhone XR, reactivated my subscription, followed the same photography and model generation workflow, and cleaned them up in Blender. Upon reflection, I would recommend this workflow over the other depending on the project timeline and funding. This latter workflow is much simpler and does the bulk of the work within the mobile application, but it requires a monthly or annual paid subscription in order to download the models. The Agisoft Metashape photogrammetry workflow is a lot more involved and requires a device with a pretty advanced graphics card, but the hardware and software are available for one flat rate. As such, the user would need to decide how much time and funding is available for this type of project and make decisions around hardware and software accordingly. 

After generating these models, as well as those of the aforementioned African sculptures and instruments, they were uploaded to the [Sketchfab](http://sketchfab.com) three-dimensional modeling platform in separate collections by type so that the models would be publicly viewable: outdoor sculptures ([Figure 3](https://skfb.ly/oEAoH)),<sup>6</sup> murals ([Figure 4](https://skfb.ly/oAtPK)),<sup>7</sup> African sculptures ([Figure 5](https://skfb.ly/oyFVN)),<sup>8</sup> and African instruments ([Figure 6](https://skfb.ly/oEAoN)).<sup>9</sup>

<iframe class="sketchfab-embed" title="Sketchfab Viewer" id="client-246bfb7ef6f74f18bd25056ca95ef393" allowvr="" src="https://sketchfab.com/models/246bfb7ef6f74f18bd25056ca95ef393/embed?api_version=1.5.2&amp;api_id=1_client-246bfb7ef6f74f18bd25056ca95ef393&amp;autostart=0&amp;tracking=0" frameborder="0" allowfullscreen="" mozallowfullscreen="true" webkitallowfullscreen="true" allow="vr; autoplay; fullscreen"></iframe>

_Figure 3: outdoor sculptures_

<iframe class="sketchfab-embed" title="Sketchfab Viewer" id="client-113331a2e92940e493bf83cac9a75416" allowvr="" src="https://sketchfab.com/models/113331a2e92940e493bf83cac9a75416/embed?api_version=1.5.2&amp;api_id=1_client-113331a2e92940e493bf83cac9a75416&amp;autostart=0&amp;tracking=0" frameborder="0" allowfullscreen="" mozallowfullscreen="true" webkitallowfullscreen="true" allow="vr; autoplay; fullscreen"></iframe>

_Figure 4: murals_

<iframe class="sketchfab-embed" title="Sketchfab Viewer" id="client-8e797df055624a6fa147b4be2e6b32a1" allowvr="" src="https://sketchfab.com/models/8e797df055624a6fa147b4be2e6b32a1/embed?api_version=1.5.2&amp;api_id=1_client-8e797df055624a6fa147b4be2e6b32a1&amp;autostart=0&amp;tracking=0" frameborder="0" allowfullscreen="" mozallowfullscreen="true" webkitallowfullscreen="true" allow="vr; autoplay; fullscreen"></iframe>

_Figure 5: African sculptures_

<iframe class="sketchfab-embed" title="Sketchfab Viewer" id="client-3df757f3828f444d8ae31e11fd8c0df1" allowvr="" src="https://sketchfab.com/models/3df757f3828f444d8ae31e11fd8c0df1/embed?api_version=1.5.2&amp;api_id=1_client-3df757f3828f444d8ae31e11fd8c0df1&amp;autostart=0&amp;tracking=0" frameborder="0" allowfullscreen="" mozallowfullscreen="true" webkitallowfullscreen="true" allow="vr; autoplay; fullscreen"></iframe>

_Figure 6: African instruments_

Additionally, I considered the ethical issues surrounding making the models downloadable. The increased digital visibility of these public artworks was a driving force throughout the entire project, but there are issues surrounding the game development industry that typically isolates Black players and other underrepresented groups (Collins, 1998; Gray, 2012; Higgin, 2009) using those models out of context in games. With that in mind, I decided to upload the models as public collections without the option to download so that they could be shared widely with limited risk of being exploited. An expert modeler could potentially build the model from scratch or even embark on their own photogrammetric journey but at least the general game developer seeking easy access to modeled Black art would be discouraged to use these.
{% endmarkdown %}
</section>

<section class="article-section article-section--tint">
{% markdown %}

## Developing an Augmented Reality Project to Celebrate Ephemeral Public Art

<div class="zigzag zigzag--orange" aria-hidden="true"></div>

After generating the three-dimensional assets, the next step was to develop a mapping visualization through [ArcGIS StoryMaps](https://storymaps.arcgis.com), a story authoring web-based application that allows the user to share mapping visualizations in the context of narrative text and other multimedia content, of the public artwork data to show where they exist(ed) in physical space. After the data set was finalized, I created a spreadsheet with the contextual information about each outdoor sculpture and mural (e.g., artist, year, neighborhood, geographic coordinates). I identified an image for each of them and drafted introductory text to describe the project and the augmented reality component on the story map website ([Figure 7](https://arcg.is/1bTWWW)).<sup>10</sup>


<iframe title="Sacred Geographic Superimpositions story map" src="https://storymaps.arcgis.com/stories/6f9c9f75c9af4d0a9687fc342cea01d2" width="100%" height="500px" frameborder="0" allowfullscreen="" allow="geolocation"></iframe>

_Figure 7: story map website_

Next, I used the guided tour template to insert an interactive map directly into the website by adding a text box with the image; title, date, and artist; description text with a note to follow a link for more information if available; and a link to the model on Sketchfab. Then I clicked on the “add location” button to place a marker at the artwork’s location. The guided tour begins in South Philly, runs through Center City, loops around West Philly, and travels through North Philly ending in Germantown. Next, I embedded the outdoor sculpture and mural model collections from Sketchfab and a YouTube video of a song that inspired me as I worked on the project, “My Skin My Logo” by Solange (featuring Gucci Mane; produced by Tyler, the Creator and Steve Lacy) from her _When I Get Home_ (2019) album. The line “Guwop not Polo (it’s Gucci), My skin my logo (Yeah), My skin my logo” specifically resonated with the development of this project. I was intentional about excluding artwork that depicted Blackness without including a Black artist and incorporated the African sculpture and instrument models that I was developing for separate projects. The phrase also aligned with my personal and professional philosophies of “all Black everything,” or as actress, producer, writer Issa Rae commented at the 2017 Emmys, “I’m rooting for everybody Black,” which is inscribed on my favorite coffee mug to drink from while I worked on this project from home. 

Next, I began curating the twenty-four individual altars in Blender. For each altar I identified objects that represented each of the five elements. To represent spirit/æther I selected an African sculpture or instrument and framed photographs of the artist, the artwork, and any other relevant theme. The air category is represented by such items as basil, lavender, and chamomile plants; cinnamon incense; a singing bowl; or a feather. The items representing air are often connected to those representing water, such as an abalone shell which might hold a rosemary cleansing stick, a rose petal sage bundle, or bay leaves. Other water signifiers include rose, black, or cinnamon soap and blue anil. Fire was represented by candles and tea lights in intentionally selected colors, and earth was represented by some combination of three to five crystals. I placed each of the designated objects around each imported outdoor sculpture model and in front of each imported mural model. In some instances I placed objects on plates, soap dishes, or tables depending on the space and structure of the public artwork model. Before exporting the altar model file, I joined all of the individual models together by selecting them individually and using the Ctrl+J command, and then added the decimate modifier to reduce the polygon count11 so that the file size would be small enough to fit within the augmented reality mobile application. Each altar file was exported as an .fbx file12 and imported into the [Unity](https://unity3d.com) cross-platform game engine to develop the augmented reality mobile application using the [Vuforia](https://developer.vuforia.com) plug-in for Unity. On the sixth iteration of building the project from scratch I was able to develop a workflow that worked successfully with no bugs. I am including the workflow in full here because there was no individual tutorial with these steps neatly laid out in their entirety. For this workflow, I used an external webcam attached to the monitor on my Mac mini in order to launch the augmented reality content at the test steps. 

In a new project, I downloaded the Vuforia Engine from the Unity Asset store and added it to the project.13 Next I deleted the Main Camera from the Unity project Scene and added the Vuforia Engine AR Camera by right clicking in the scene, scrolling down to Vuforia Engine, and selecting AR Camera. I clicked on that camera in the Scene panel and added the Vuforia license key from the developer portal on their website to the Unity Inspector pane. At this point I was ready to start importing my assets so I saved the project and closed it. Within the Assets folder in the project’s file folders I created three new folders: 3D Models, Photos, and Animations. Within each folder I created two subfolders, Murals and Sculptures, and I dragged individual photographs in .jpg format into the appropriate Photos subfolders. Each time something was added to the project’s file folders, the software has to import them into the project when it opens, which can take a significantly longer time if there are multiple files to import, so I decided to work with the files associated with each individual public art altar one at a time rather than allowing the software to bring them all in at once. I was also using this as an opportunity to test the software to find out at what point it was having the issues of previous project iterations; luckily, there were no future issues. In order to build the animated augmented reality models I followed this workflow:

1.  Open the project in the Unity Hub. Allow it to import the new files.
2.  Create the Image Target
    1.  Right click in the Scene panel, hover over Vuforia Engine, select Image Target.
    2.  Rename the Image Target using the lowercaseUppercase formatting convention (e.g., fatherPaulWashingtonImage, allPowerImage, cattoImage). 
    3.  Open the Photos folder in the Project tab. Select the Image Target in the Scene pane. Drag and drop the photograph into the blank image box in the Image Target Behavior Script section of the Inspector pane.
3.  Add the model to the scene 
    1.  Open the 3D Models folder in the Project tab. Drag and drop the model into the scene as a child of the Image Target (it will be highlighted in a lighter gray and the arrow cursor will curve to indicate the file is being dragged in as a child of that parent file). Rename the model according to the same formatting convention (e.g., fatherPaulWashingtonModel, allPowerModel, cattoModel).
    2.  Set the position, rotation, and scale of the model in the Transform box of the Inspector pane. 
4.  Test augmented reality
    1.  Hit the play button at the top of the screen to enter game mode. Point the webcam at the photograph on the map. This should launch the model in the game scene in front of the photograph. Hit play again to end the test. 
5.  Add animation
    1.  Open the Animations folder in the Project tab. 
    2.  Select the model in the Scene pane. Click on the Animations tab and click the Create button in the bottom center pane. This will launch the file folder so that the animation can be saved in the Animations folder. Give it a generic name using the formatting convention (e.g., sculptureRotation) because you will use this general animation to create the individual ones. 
    3.  Click Add Property in the Animation tab. Expand the Transform option in the box that pops up. Select Rotation. Expand the Rotation option in the Animation tab. Two key points will automatically be populated into the bottom center pane. Drag them to the appropriate interval on the time scale and edit the X, Y, and Z rotations to the appropriate degrees. 
        1.  My outdoor sculpture animations last fifteen seconds on a constant loop so I dragged the second key point to 15:00 and changed the X rotation to 360. Some of my models started at 90 degrees so I increased the rotation to 450 to get a full rotation. 
    4.  Right click to add additional key points and set the rotation degrees.
        1.  My mural animations also last fifteen seconds on a constant loop but they rotate 30 degrees in each direction so I created these additional key points: 30 degrees on the X axis at 3:45 seconds, back to 0 degrees at 7:50 seconds, and -30 degrees at 11:15 seconds. 
    5.  Hit the play button on the Animation tab to test the animation. Edit the name of the animation in the Animations folder on the Project tab using the same formatting convention (e.g., fatherPaulWashingtonRotation, allPowerRotation, cattoRotation).
6.  Test the animated augmented reality
    1.  Hit the play button at the top of the screen to enter game mode. Point the webcam at the photograph on the map. This should launch the animated model in the game scene in front of the photograph. Hit play again to end the test. 
7.  Save and close the project. Add the next model-photograph pair to the file folders. Launch the project from the Unity Hub. 
8.  Follow the same workflow with the exception of the animation step. If the same animation is going to be applied to other models, the generic animation (e.g., sculptureRotation) can be dragged from the Project tab and dropped onto the model to create that individual animation. 

While I did this, I noticed some of the objects within each altar model were showing up completely white due to the significantly smaller scale so I removed them in Blender and reuploaded them to Unity. 

After building the entire project in Unity, I downloaded Xcode so that I could submit the iOS application to the Apple App Store.14 It was initially rejected because I did not realize I could beta test my mobile application in XCode, which revealed that it was not functioning properly. I reached out to a Unity developer to fix the bugs and re-submitted it for approval. The Unity developer also informed me that my game was too large. My first solution, also known as my fifth re-build, was to split it into four separate mobile applications based on location (i.e., Center City and South Philly, West Philly, and two for North Philly), but this was rejected because each application has the same functionality and Apple considers that to be spam. Next, I found the aforementioned instructions on how to apply the decimate modifier in Blender and compress the mesh in the Unity inspector window by setting it to low or medium, depending on the quality of the model when applied. Finally, iOS 14 requires an “App Tracking Transparency” pop-up to request permission before collecting data used to track since Unity mobile applications automatically track certain data. I followed the tutorial (see Endnote 14) and added the IDFA object as the first item on the Scene panel after the AR Camera. These updates allowed me to export the sixth and final re-build to Xcode and have a fully functional mobile application. Apple also instructed me to add a start page with instructions on how to pair it with the project website, add more information about data use and sharing for the end user, ensure that my mobile application icon is unique, and provide a video demonstration for the reviewers. Once it was published to the Apple App Store, I updated the instructions for downloading and launching it to the project website below the project description with a link to the [iOS application](https://apple.co/3vLtM1f). A demonstration of the application working with the story map website is featured in Figure 8.

_Figure 8. Demonstration of the SacredGS Ar App working with the project story map website._

<video controls preload="metadata" controlslist="nodownload">
  <source src="/assets/figure-8.webm" type="video/webm">
  <source src="/assets/figure-8.mp4" type="video/mp4">
  Your browser does not support embedded video.
</video>

{% endmarkdown %}
</section>

<section class="article-section article-section--overview">
{% markdown %}

## Reflecting on Afrofuturist Data Curation as a Black GLAM Methodology

<div class="zigzag zigzag--orange" aria-hidden="true"></div>

_Sacred Geographic Superimpositions_ is essentially my entrée into the larger Black speculative project to apply an Afrofuturist conceptual framework to the application of digital humanities tools. In this project, photogrammetry, story mapping, and augmented reality provided a method for cultural preservation and curation as a means to honor those artworks which were in Philadelphia at some point during the project’s development. Cultural critic and originator of the term “Afrofuturism” Mark Dery explains, 

> It’s worth pointing out, in the context of what I’ve chosen to call “Afrofuturism,” that the mojos and goofer dust of Delta blues, together with the lucky charms, fetishes, effigies, and other devices employed in syncretic belief systems, such as voodoo, hoodoo, santería, mambo, and macumba, function very much like the joysticks, Datagloves, Waldos, and Spaceballs used to control virtual realities. Jerome Rothenburg would call them technologies of the sacred (1994, p. 210). 

In that discussion, sociologist and hip hop scholar Tricia Rose comments, “ancestor worship in Black culture is a way of countering a historical erasure” (Rose quoted in Dery, 1994, p. 215). This project is indeed a spiritual scholarly endeavor to document and celebrate ephemeral Black public art in Philadelphia in a manner that transports them into the ancestral plane of the “transformative archive” to grapple with the power structures that govern the way we “preserve, gather, and share historical documents” in a manner that brings scholarly research and data curation out of the academy into a curated space grounded in storytelling and interpretation (Lothian and Phillips, 2013). As noted earlier, some public artworks that fit the scope of the project were not included because they had already been removed, others that were included were never intended to be permanently installed in Philadelphia, and the remainder could be removed at any moment. As such, the augmented reality output of this project was developed in an effort to celebrate those temporary and semi-permanent public artworks as sacred spaces adorned with objects pulled from my own spiritual practice. In other words, this phase of the project was my opportunity to use digital humanities tools to supplant the proverbial flowers that we often give to honor someone toward the end of their life or after they have died.

The primary impetus for this project was to bring together the development of specific digital humanities skills, namely photogrammetry, data visualization through mapping, and interactivity through augmented reality, to establish a workflow that could be utilized by small institutions with limited capacity and resources. Similarly, the motivation for this article revolves around sharing this methodology that uses a combination of free open-source and low-cost proprietary tools with a community of Black studies scholars so that it can be employed in other projects being developed by independent researchers. There were a number of issues along the way which led to the phrase repeated between a friend and myself: “technology is gonna technology.” As I shared my frustrations with learning each skill, the software not functioning as expected, or being generally overwhelmed with the slow pace of the project against a loudly ticking self-imposed deadline, we would repeat to each other, “technology is gonna technology.” While it never immediately eased my irritation it did give me a sort of mantra to remind myself this is supposed to be difficult and to keep pushing. 

Another motivating source of frustration lied in the fact that online tutorials to learn how to use the different software programs, specifically Blender and Unity, was not only scarce, especially when the scope had to be limited to only tutorials from 2019 or sooner due to consistent version updates, but also none of the folks in the tutorials were Black and/or female. This particular point encouraged me to find some patience within myself to keep working on this project so that I can contribute to the solution. In addition to sharing the workflow in this article, I have been working on a Tik Tok series (see Endnotes 2 and 5) to reach additional audiences outside of academia and contribute to the transformation of digital humanities to include more Black practitioners and practitioners from other underrepresented groups. 

Additionally, I am active with the [Association of African American Museums](https://blackmuseums.org/), the professional association “established to support African and African American focused museums nationally and internationally, as well as the professionals who protect, preserve and interpret African and African American art, history and culture” (Association of African American Museums, n.d.). I was selected to participate in a Mellon Foundation-funded [working group](https://blackmuseums.org/working-groups/) focused on identifying ways to use traveling, shared, and collaborative exhibitions to build capacity for member institutions. Within this group I am working with other Black GLAM and digital humanities folks to identify target areas for improvement that can be addressed through skill-building workshops and prototyping. As such, this space will allow my colleagues and I to continue to test this and other workflows and share them broadly within the field and thus expand methods for the curation of Black art, history, and culture using digital humanities tools and more.

_(May 2023)_

<hr class="border-t border-gray-300 my-6">

<sup>1</sup> _Healing Walls: Inmates’ Journey_, _Healing Walls: Victims’ Journey_, and _A Tribute to Urban Horsemen_ were painted by pairs of Black and non-Black artists. 

<sup>2</sup> Visit [https://tinyurl.com/ycksrhec](https://tinyurl.com/ycksrhec) to view this process from photography to modeling in Agisoft Metashape for a small sculpture. The process for a large sculpture is largely the same, the only difference being the user can swivel small sculptures around on a turntable whereas one has to move around a large sculpture. 

<sup>3</sup> Jasmine Lelis Clark, the Temple University Libraries digital scholarship librarian and liaison to the Africology and African American Studies Department was such a phenomenal help throughout this project. Each time she caught me spiraling into a ball of stress, she came and sat with me in my office, tilted my laptop so that we could both see it, and “took the wheel” as she calmly talked me through the issues I was having. I would also like to extend my gratitude to Jordan Hample, the Temple University Libraries academic information technology and support technician. He was always a very calm spirit while I stressed and obsessed throughout the project and always found time to answer my questions and assist me whenever I came to him with a question or issue I was unable to resolve on my own. Next, I wish to show my appreciation for Elysia Petras, an historical archaeology doctoral candidate in the Anthropology Department at Temple University who introduced me to photogrammetry as she prepared to teach a virtual workshop on the topic during her graduate externship with the Temple University Libraries Loretta C. Duckworth Scholars Studio. Finally, I would like to thank Philadelphia Museum of Art photographer Tim Tiebow for helping me iterate on this workflow to include best practices he had learned and shared with me while we were photographing African sculptures.

<sup>4</sup> The _Kalief Browder: The Box_ model was ultimately excluded from the mapping/augmented reality project because the glass texture would not properly display outside of Blender. The model is, however, included in the Sketchfab collection via [https://tinyurl.com/2rtjsztp](https://tinyurl.com/2rtjsztp).

<sup>5</sup> Visit [https://tinyurl.com/43zs7fm4](https://tinyurl.com/43zs7fm4) to view a quick video tutorial I created while modeling the _Three Figures_ sculpture. This tutorial shows photography and model generation in Polycam LiDAR 3D Scanner and model clean-up in Blender. 

<sup>6</sup> Visit [https://skfb.ly/ov9ZE](https://skfb.ly/ov9ZE) to view the entire collection of outdoor sculpture models. 

<sup>7</sup> Visit [https://skfb.ly/ouxWz](https://skfb.ly/ouxWz) to view the entire collection of mural models. 

<sup>8</sup> Visit [https://skfb.ly/osWZx](https://skfb.ly/osWZx) to view the entire collection of African Sculpture models from the Philadelphia Museum of Art collection. 

<sup>9</sup> Visit [https://skfb.ly/ov9ZC](https://skfb.ly/ov9ZC) to view the available collection of African instrument models from the Temple University Libraries Charles L. Blockson Afro-American Collection. Some models from this collection have not been uploaded because they need to have additional research conducted on them.

{% endmarkdown %}
</section>

<section class="article-section article-section--references">
{% markdown %}

## References

Association of African American Museums. “Mission.” Retrieved from [https://blackmuseums.org/mission/](https://blackmuseums.org/mission/).

Barber, T. E. (2018). 25 Years of Afrofuturism and Black Speculative Thought: Roundtable with Tiffany E. Barber, Reynaldo Anderson, Mark Dery, and Sheree Renée Thomas. _Project Muse_, _39_(Spring 2018), 136–144.

Brock, A. (2018). Critical Technocultural Discourse Analysis. _New Media & Society_, _20_(3), 1012–1030.

Brock, A. (2020). Black Technoculture and/as Afrofuturism. _Extrapolation_, _61_(1–2), 7–28.

Collins, P. H. (1998). _Fighting Words: Black Women and the Search for Justice_. University of Minnesota Press.

de Souza e Silva, A. (2013). Mobile Narratives: Reading and Writing Urban Space with Location-Based Technologies. In N. K. Hayles & J. Pressman (Eds.), _Comparative Textual Media: Transforming the Humanities in a Postprint Era_ (pp. 33–52). University of Minnesota Press.

Dery, M. (1994). Black to the Future: Interviews with Samuel R. Delany, Greg Tate, and Tricia Rose. In M. Dery (Ed.), _Flame Wars: The Discourse of Cyberculture_ (pp. 179–222). Duke University Press.

Gaskins, N. R. (2016). Afrofuturism on Web 3.0: Vernacular Cartography and Augmented Space. In R. Anderson & C. E. Jones (Eds.), _Afrofuturism 2.0: The Rise of Astro-Blackness_ (pp. 27–44). Lexington Books.

Gray, K. (2012). Deviant Bodies, Stigmatized Identities, and Racist Acts: Examining the Experiences of African-American Gamers in Xbox Live. _New Review of Hypermedia and Multimedia_, _18_(4), 261–276.

Higgin, T. (2009). Blackless Fantasy: The Disappearance of Race in Massively Multiplayer Online Role-Playing Games. _Games and Culture_, _4_(1), 3–26.

Johnson, A., Johnston, C., & Ranganath, A. (2022). The Third Library & the Commons. _A Third Library Is Possible_. [https://futures.clir.org/the-third-library-the-commons/](/the-third-library-the-commons/)

Lothian, A., & Phillips, A. (2013). Can Digital Humanities Mean Transformative Critique? _Journal of E-Media Studies_, _3_(1).

McPherson, T. (2012). Why are the Digital Humanities So White? Or Thinking the Histories of Race and Computation. In M. K. Gold (Ed.), _Debates in the Digital Humanities_ (pp. 139–160). University of Minnesota Press.

Moor Mother Goddess. (2015). Forethought. In R. Phillips (Ed.), _Black Quantum Futurism: Theory & Practice_ (Vol. 1, pp. 7–10). Afrofuturist Affair/House of Future Sciences Books.

West, K. (2005). Roses \[Song\]. On _Late Registration_ \[Album\]. Roc-A-Fella Records. 

Wust, M. (2016). Augmented Reality. In C. Crompton, R. J. Lane, & R. G. Siemens (Eds.), _Doing Digital Humanities: Practice, Training, Research_ (pp. 303–313). Routledge.

{% endmarkdown %}
</section>


<script async="" src="https://www.tiktok.com/embed.js"></script>
