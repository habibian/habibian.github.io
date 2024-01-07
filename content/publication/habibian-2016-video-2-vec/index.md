---
title: Video2vec Embeddings Recognize Events when Examples are Scarce

authors:
- admin
- Thomas Mensink
- Cees GM Snoek

date: '2016-11-10'

publishDate: '2016-12-07T11:50:19.193535Z'

publication_types:
- article-journal

publication: '*T-PAMI*'

abstract: "This paper aims for event recognition when video examples are scarce or even completely absent. The key in such a challenging setting is a semantic video representation. Rather than building the representation from individual attribute detectors and their annotations, we propose to learn the entire representation from freely available web videos and their descriptions using an embedding between video features and term vectors. In our proposed embedding, which we call Video2vec, the correlations between the words are utilized to learn a more effective representation by optimizing a joint objective balancing descriptiveness and predictability. We show how learning the Video2vec using a multimodal predictability loss, including appearance, motion
and audio features, results in a better predictable representation. We also propose an event specific variant of Video2vec to learn a more accurate representation for the words, which are indicative of the event, by introducing a term sensitive descriptiveness loss. Our experiments on three challenging collections of web videos from the NIST TRECVID Multimedia Event Detection and Columbia Consumer Videos datasets demonstrate: i) the advantages of Video2vec over representations using attributes or alternative embeddings, ii) the benefit of fusing video modalities by an embedding over common strategies, iii) the complementarity of term sensitive descriptiveness and multimodal predictability for event recognition. By its ability to improve predictability of present day audio-visual video features, while at the same time maximizing their semantic descriptiveness, Video2vec leads to state-of-the-art accuracy for both few- and zero-example recognition of events in video"

tags: [Multimodal Embedding, Vision and Langugage, Multimodal Representation]

# Display this page in the Featured widget?
featured: no

url_pdf: 'https://pure.uva.nl/ws/files/16887992/Video2vec_Embeddings.pdf'
url_code: ''
url_poster: ''
url_project: ''
url_slides: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  caption: 'Cover figure'
  focal_point: ''
  preview_only: false
---
