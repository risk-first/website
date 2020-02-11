

# Introducing: SAME

Below is a piece of Java code I wrote the other day.  We're not going to look into it too closely (and in fact, this post isn't really even about Java _per se_), so here are the key take-aways:
   
 - It's for converting a `Table` of data (essentially, columns and rows, where each column has a name) into a `Places` object, which is a proper Java bean, consisting of a collection of `Place` objects.  
 - Each `Place` has a name, some boolean fields and some numeric fields.
 - There's lots of Java Streams work going on here, and heavy indenting.
 - This code isn't really heavy-duty, it's pretty thrown-together.
 - It's fairly hard to read
 
![Places 1](/images/complexity/places1.png)

The whole purpose of this function is really to establish a _mapping_:  essentially, it is saying that _some_ `Table`s map to `Places`, and here's how you do it.  It looks like this:

-- all tables, place tables -> Place objects.

But in order to construct the mapping from `Table`s to `Places`, we also need to create the mapping from `Table` rows to `Place` objects, the `Table` columns to `Place` fields, and the `Table` cells to `Place` field-values.  

Let's look at where that happens:

![Places 2](/images/complexity/places2.png)

So here I've highlighted where we establish these mappings:

- `Table` and `Places`
- `r` (row) and `Place`
- Column Name and `Field`
- Text Value of a cell, and the field value.

Ok, so this kind of works and it looks terrible.  But there are really big problems here:

- First, I can only convert from `Table` to `Place`, not back again.
- Second, I can't tell ahead-of-time whether a `Table` will convert to `Places`.  A table row could contain things that _aren't_ `Place`s, and then it would fall over.
- Third, given a `Table` and a `Places`, there's no way I can tell whether they are the same, without first converting one into the other, and then comparing them.  That is, if I have an `equals()` method defined for `Table`, then I can't make use of that to compare `Places` with each other, even though realistically, if they are equivalent, then the equals should be equivalent... and the same goes for any other functionality I might declare on `Place` or `Table` individually.  If they are equivalent representations of the same data, then the same operations should work on each of them, right?

So, to summarize:

- I want a way to declare an equivalence (i.e. a two-way mapping) in Java, rather than just a one-way mapping.

