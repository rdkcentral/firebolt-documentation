# Profile Flags

Profile Flags are only necessary under specific circumstances. These are prescribed by distributors who may want to add flags that trigger specific user experiences based on distribution rights, etc.

_For more information, reach out to your platform account manager from the distributors you’re working with._

You can access the user's profile flags as follows:

```javascript
import { Profile } from '@firebolt-js/sdk'

const flags = Profile.flags().then( profileFlags => {
    if (profileFlags['someFlag'] === 'someValue') {
        // do something...
    }
})
```
