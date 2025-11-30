---
tags:
  - knowledge_representation
draft: true
---

## Positive logic programs

Two components: 
1. Facts:  `a.`
2. Rules:  `a :- b, c, d` , which is the same as `b ∧ c ∧ d → a`

This is a positive logic program:
```prolog
rainy(amsterdam).
rainy(vienna).
wet(X) :- rainy(X). # eq: ∀x. (Rainy(x) → Wet(x))
```
### Database semantics

**Assumptions**
1. Domain closure: The objects mentioned are the only objects.
2. Unique-names assumption: Two variables can't refer to the same object
3. Closed-world assumption: Whatever we don't know is false

> [!faq]- What does the database semantics allow us to do?
>   1. We can specify a relation by the set of inputs that are true
>   2. We can specify objects simply by the terms that point to them
>   3. We don't have to explicitly define what function symbols mean


Thus, an **interpretation** is a set that defines which atoms are true. The remainder are false.

### Models

> [!faq]- What is a model? 
> A model is an interpretation which makes all rules of a program true.


However, we're not interested in all models, we want the highest expressivity at the lowest information.


> [!faq]- What is the definition of a minimal model?
> A model is minimal if no strict subset exist that is also a model.

> [!faq]- How do you construct a minimal model?
> Start with facts and add new literals that are on the lhs of a rule where all body is in M.
> ```python
> M = {f for f in facts}
> while True:
> 	for head, body in rules:
> 		if all(l in M for l in body):
> 			M.add(l)
> ```


> [!faq]- What is the definition of a supported model?
> A model is supported if all its atoms are supported.
> An atom of a model is supported if it appears as a head where the body is true.

> [!faq]- What properties does minimal models and supported models have for positive logic programs?
> For positive logic programs:
> - Minimal models are unique
> - A minimal model is also a supported model (but not necessarily viceversa)

## Normal logic programs

Now we allow negation.

```
a :- b_1, ..., b_n, not c_1, ..., not c_m.
```

> [!faq]- Do properties of minimal models for PL still hold for NL? Why?
> No, negation removes allows for non-uniqueness of minimal models.
