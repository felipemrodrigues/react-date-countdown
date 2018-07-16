React Date Countdown
==============

Countdown component for [React.js](http://facebook.github.io/react/)

Installation
------------

```sh
$ npm install react-date-countdown
```

Usage
-----

```javascript
import Countdown from 'react-date-countdown';

<Countdown finalDate="2018-07-16T00:00:00Z" />
```



Attributes
----------

- **startDate** (optional): Delta of start date. If this is set the component won't behave as a countdown but as an interval calculator between the start and final date
- **finalDate**: Delta of final date.
- **className** (optional): CSS class.
