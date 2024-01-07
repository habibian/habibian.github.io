---
title: Learning variations in human motion via mix-and-match perturbation
authors:
- Mohammad Sadegh Aliakbarian
- Fatemeh Sadat Saleh
- Mathieu Salzmann
- Lars Petersson
- Stephen Gould
- admin

date: '2020-02-24'

publishDate: '2021-01-07T11:50:19.155529Z'

publication_types: ['paper-conference']

publication: '*CVPR*'

abstract: "Human motion prediction is a stochastic process: Given an observed sequence of poses, multiple future motions are plausible. Existing approaches to modeling this stochasticity typically combine a random noise vector with information about the previous poses. This combination, however, is done in a deterministic manner, which gives the network the flexibility to learn to ignore the random noise. In this paper, we introduce an approach to stochastically combine the root of variations with previous pose information, which forces the model to take the noise into account. We exploit this idea for motion prediction by incorporating it into a recurrent encoder-decoder network with a conditional variational autoencoder block that learns to exploit the perturbations. Our experiments demonstrate that our model yields high-quality pose sequences that are much more diverse than those from state-of-the-art stochastic motion prediction techniques."

tags: [Generative Modeling, Human Pose Forecasting]

# Display this page in the Featured widget?
featured: true

url_pdf: 'https://arxiv.org/pdf/1908.00733.pdf'
url_code: 'https://github.com/mix-and-match/mix-and-match-tutorial'
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
