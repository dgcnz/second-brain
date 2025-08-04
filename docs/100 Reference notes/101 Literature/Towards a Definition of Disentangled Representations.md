---
authors:
  - "[[Irina Higgins|Irina Higgins]]"
  - "[[David Amos|David Amos]]"
  - "[[David Pfau|David Pfau]]"
  - "[[Sebastien Racaniere|Sebastien Racaniere]]"
  - "[[Loic Matthey|Loic Matthey]]"
  - "[[Danilo Rezende|Danilo Rezende]]"
  - "[[Alexander Lerchner|Alexander Lerchner]]"
year: 2018
tags:
  - paper
  - disentanglement
  - dl_theory
url: http://arxiv.org/abs/1812.02230
share: true
---


> [!tldr] Abstract
> How can intelligent agents solve a diverse set of tasks in a data-efficient manner? The disentangled representation learning approach posits that such an agent would benefit from separating out (disentangling) the underlying structure of the world into disjoint parts of its representation. However, there is no generally agreed-upon definition of disentangling, not least because it is unclear how to formalise the notion of world structure beyond toy datasets with a known ground truth generative process. Here we propose that a principled solution to characterising disentangled representations can be found by focusing on the transformation properties of the world. In particular, we suggest that those transformations that change only some properties of the underlying world state, while leaving all other properties invariant, are what gives exploitable structure to any kind of data. Similar ideas have already been successfully applied in physics, where the study of symmetry transformations has revolutionised the understanding of the world structure. By connecting symmetry transformations to vector representations using the formalism of group and representation theory we arrive at the first formal definition of disentangled representations. Our new definition is in agreement with many of the current intuitions about disentangling, while also providing principled resolutions to a number of previous points of contention. While this work focuses on formally defining disentangling - as opposed to solving the learning problem - we believe that the shift in perspective to studying data transformations can stimulate the development of better representation learning algorithms.



## Notes

[Zotero Link](zotero://select/library/items/LCZEHHGA)




> focusing on the transformation properties of the world
> 
> 



> these approaches can be used to define a set of constraints on the decomposition of a vector space into independent subspaces to ensure that the vector space is reflective of the underlying structure of the corresponding symmetry group.
> 
> 



> However, it is important to note that we define disentangled representations with respect to a particular decomposition of a symmetry group into subgroups. This aspect of our definition will be discussed in more detail later in this section.
> 
> 



> A representation disentangled by the definition above will have the compositional property often found to be desirable.
> 
> 



> This is the basis of the theory of actionable information, which holds that a complete theory of visual perception needs to treat image acquisition as an active process of information gathering [69].
> 
> 



> To date, most work on disentangling has relied on comparison with human intuition for evaluation, though a number of metrics have been proposed in the case where the ground truth factors are known [27, 65, 51, 47, 55, 72].
> 
> 



> Explicitness Explicitness measures whether the values of all of the data generative factors can be decoded from the representation using a linear transformation. This is the strongest requirement of the three, since it encompasses two points: that a disentangled representation captures information about all the data generative factors, and that this information is linearly decodable.
> 
> 

