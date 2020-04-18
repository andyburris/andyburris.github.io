<script>
import mjukna from 'mjukna';
import { sharedin, sharedout } from "../../components/mjukna-transition.js";
import { fade } from 'svelte/transition'

</script>

<style>
.test-2-holder{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}

h1{
    color: #FFFFFF;
    font-weight: 700;
}
</style>

<div class="test-2-holder">
    <h1 in:sharedin={{test: "t2 in"}} out:sharedout transition-key= "t2">Test 2</h1>
</div>
