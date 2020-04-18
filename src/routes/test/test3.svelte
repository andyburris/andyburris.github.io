<script>
import mjukna from 'mjukna';
import { sharedin, sharedout } from "../../components/mjukna-transition.js";

</script>

<style>
.test-3-holder{
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

<div class="test-3-holder">
    <h1 in:sharedin={{test: "t3 in"}} out:sharedout transition-key= "t3">Test 3</h1>
</div>
