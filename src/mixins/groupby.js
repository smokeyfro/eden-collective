export const groupBy = {
    methods: {
        /*!
        * Group items from an array together by some criteria or value.
        * (c) 2019 Tom Bremmer (https://tbremer.com/) and Chris Ferdinandi (https://gomakethings.com), MIT License,
        * @param  {Array}           arr      The array to group items from
        * @param  {String|Function} criteria The criteria to group by
        * @return {Object}                   The grouped object
        */
        groupBy(arr, criteria) {
            return arr.reduce(function (obj, item) {
                // set the node element as item
                // otherwise we have to use `item.node` everywhere in the code
                item = item.node;
                // Check if the criteria is a function to run on the item or a property of it
                var key = typeof criteria === 'function' ? criteria(item) : item[criteria];
                // If the key doesn't exist yet, create it
                if (!obj.hasOwnProperty(key)) {
                    obj[key] = [];
                }
                // Push the value to the object
                obj[key].push(item);
                // Return the object to the next item in the loop
                return obj;
            }, {});
        }
    }
};
  