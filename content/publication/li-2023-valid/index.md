---
title: 'VaLID: Variable-Length Input Diffusion for Novel View Synthesis'
authors:
- Shijie Li
- Farhad G Zanjani
- Haitam Ben Yahia
- Yuki M Asano
- Juergen Gall
- admin

date: '2023-11-18'

publishDate: '2024-01-07T11:50:19.097855Z'

publication_types: ['paper-conference']

publication: '*WACV*'

abstract: Novel View Synthesis (NVS), which tries to produce a realistic image at the target view given source view images and their corresponding poses, is a fundamental problem in 3D Vision. As this task is heavily under-constrained, some recent work, like Zero123, tries to solve this problem with generative modeling, specifically using pre-trained diffusion models. Although this strategy generalizes well to new scenes, compared to neural radiance field-based methods, it offers low levels of flexibility. For example, it can only accept a single-view image as input, despite realistic applications often offering multiple input images. This is because the source-view images and corresponding poses are processed separately and injected into the model at different stages. Thus it is not trivial to generalize the model into multi-view source images, once they are available. To solve this issue, we try to process each pose image pair separately and then fuse them as a unified visual representation which will be injected into the model to guide image synthesis at the target-views. However, inconsistency and computation costs increase as the number of input source-view images increases. To solve these issues, the Multi-view Cross Former module is proposed which maps variable-length input data to fix-size output data. A two-stage training strategy is introduced to further improve the efficiency during training time. Qualitative and quantitative evaluation over multiple datasets demonstrates the effectiveness of the proposed method against previous approaches. The code will be released according to the acceptance.

tags: [3D Generation, Novel View Synthesis, Diffusion Model]

# Display this page in the Featured widget?
featured: true

url_pdf: 'https://arxiv.org/pdf/2312.08892.pdf'
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
