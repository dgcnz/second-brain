---
authors:
  - "[[Quentin Garrido|Quentin Garrido]]"
  - "[[Nicolas Ballas|Nicolas Ballas]]"
  - "[[Mahmoud Assran|Mahmoud Assran]]"
  - "[[Adrien Bardes|Adrien Bardes]]"
  - "[[Laurent Najman|Laurent Najman]]"
  - "[[Michael Rabbat|Michael Rabbat]]"
  - "[[Emmanuel Dupoux|Emmanuel Dupoux]]"
  - "[[Yann LeCun|Yann LeCun]]"
year: 2025
tags:
  - paper
  - world-models
  - video
  - ssl
url: http://arxiv.org/abs/2502.11831
share: true
---


> [!tldr] Abstract
> We investigate the emergence of intuitive physics understanding in general-purpose deep neural network models trained to predict masked regions in natural videos. Leveraging the violation-of-expectation framework, we find that video prediction models trained to predict outcomes in a learned representation space demonstrate an understanding of various intuitive physics properties, such as object permanence and shape consistency. In contrast, video prediction in pixel space and multimodal large language models, which reason through text, achieve performance closer to chance. Our comparisons of these architectures reveal that jointly learning an abstract representation space while predicting missing parts of sensory input, akin to predictive coding, is sufficient to acquire an understanding of intuitive physics, and that even models trained on one week of unique video achieve above chance performance. This challenges the idea that core knowledge -- a set of innate systems to help understand the world -- needs to be hardwired to develop an understanding of intuitive physics.



## Notes

[Zotero Link](zotero://select/library/items/CAF83R6Y)




> The mechanism consisting of predicting in representation space is congruentwith the predictive coding hypothesis of cognitive neuroscience
> 
> 



> violation-of-expectation framework to probe for intuitive physics understanding without requiring any task-specific training or adaptation
> 
> 



> directly from the input withouthard-wiring a cascade of intermediate representations like object contours or pose estimation
> 
> 



> prediction error — the distance between thepredicted video representations and the actual encoded video representations — at each time-step, we obtaina temporally aligned quantitative measure of the model’s surprise throughout the video
> 
> 



> dev set of IntPhys
> 
> 



> object permanence
> 
> 



> continuity
> 
> 



> shape
> 
> 



> color constancy
> 
> 



> gravity
> 
> 



> support
> 
> 



> solidity
> 
> 



> inertia
> 
> 



> collision
> 
> 



> VideoMAEv2 can be evaluated in the sameway as V-JEPA, by predicting the future and measuring surprise via prediction error
> 
> 
> I wonder if both models are trained with the same masking strategy




> we give the model a pair of videos, asking which one of the two isimpossible
> 
> 



> The V-JEPA score uses the maximum surprise from each video, which generalizesbetter for single-video classification
> 
> 



> V-JEPA excels at properties related to the scene’s content (e.g., object permanence), but struggles with categories that require knowledge of a contextualizing event (gravity and solidity in InfLevel-lab) or themodeling of precise object interactions such as collisions
> 
> 



> model’s framerate constraints.
> 
> 



> 2 shows that although the accuracies are high for physicalviolations that imply properties intrinsic to objects (except for the color property), violations implicatinginteractions between objects, like solidity or collision, are close to chance
> 
> 



> While at training time the corruption used is the removal of spatio-temporal blocks, we can see that if weinstead use the first C frames to predict the rest of the video, this objective turns into a measure of error forthe prediction of the future.
> 
> 

