rand = function(min, max) {
    if (min==null && max==null)
        return 0;
    if (max == null) {
        max = min;
        min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
};

function case_generator(){
    var index = rand(0,4)
    var declensions = ["accusative singular", "genitive singular", "dative singular", "ablative singular", "vocative singular"];
    if (declensions[index] == "accusative singular") {
        return "am";
    }
    if (declensions[index] == "genitive singular") {
        return "ae";
    }
    if (declensions[index] == "dative singular") {
        return "ae";
    }
    if (declensions[index] == "ablative singular") {
        return "a";
    }
    if (declensions[index] == "vocative singular") {
        return "a";
    }
}

function decline(noun) {
    case_type = case_generator();
    if (noun.slice(noun.length-1) == "a") {
        return noun.slice(0, noun.length - 1) + case_generator()
    }
    if (noun.slice(noun.length - 2, noun.length) == "us" ) {
        return noun.slice(0, noun.length - 2)
    }
    if (noun.slice(noun.length-1) == "r") {
        return noun.slice(0, noun.length)
    }
    if (noun.slice(noun.length - 2, noun.length) == "um") {
        return noun.slice(0, noun.length - 2)
    }
}

x = decline("puella")
console.log(x);

