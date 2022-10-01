// Automatically generated with Reach 0.1.12 (4ca32459)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (4ca32459)';
export const _backendVersion = 24;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1],
      5: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1],
      7: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc2, ctc1],
      9: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc2, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Address;
  
  
  const v348 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  const v349 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v349, v348],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:85:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v349, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v353, v354], secs: v356, time: v355, didSend: v70, from: v352 } = txn1;
      
      sim_r.txns.push({
        amt: v353,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v365 = stdlib.safeAdd(v355, v354);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v353, v354], secs: v356, time: v355, didSend: v70, from: v352 } = txn1;
  ;
  const v365 = stdlib.safeAdd(v355, v354);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v365],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v352, v353, v354, v365],
      evt_cnt: 0,
      funcNum: 2,
      lct: v355,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v547, time: v546, didSend: v293, from: v545 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v352,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v547, time: v546, didSend: v293, from: v545 } = txn3;
    ;
    ;
    stdlib.protect(ctc3, await interact.informTimeout(), {
      at: './index.rsh:77:29:application',
      fs: ['at ./index.rsh:76:9:application call to [unknown function] (defined at: ./index.rsh:76:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:75:28:function exp)', 'at ./index.rsh:93:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v371, time: v370, didSend: v79, from: v369 } = txn2;
    const v373 = stdlib.add(v353, v353);
    ;
    let v374 = stdlib.checkedBigNumberify('./index.rsh:96:16:decimal', stdlib.UInt_max, '0');
    let v375 = v370;
    let v382 = v373;
    
    let txn3 = txn2;
    while (await (async () => {
      const v386 = stdlib.safeDiv(v374, stdlib.checkedBigNumberify('./index.rsh:99:18:decimal', stdlib.UInt_max, '100'));
      const v387 = stdlib.lt(v386, stdlib.checkedBigNumberify('./index.rsh:99:24:decimal', stdlib.UInt_max, '3'));
      let v388;
      if (v387) {
        const v389 = stdlib.safeMod(v374, stdlib.checkedBigNumberify('./index.rsh:99:37:decimal', stdlib.UInt_max, '100'));
        const v390 = stdlib.lt(v389, stdlib.checkedBigNumberify('./index.rsh:99:43:decimal', stdlib.UInt_max, '3'));
        v388 = v390;
        }
      else {
        v388 = false;
        }
      
      return v388;})()) {
      const v397 = stdlib.safeAdd(v375, v354);
      const v401 = stdlib.protect(ctc0, await interact.getHand(v374), {
        at: './index.rsh:103:42:application',
        fs: ['at ./index.rsh:102:15:application call to [unknown function] (defined at: ./index.rsh:102:19:function exp)'],
        msg: 'getHand',
        who: 'Alice'
        });
      const v402 = stdlib.protect(ctc0, await interact.getGuess(v374), {
        at: './index.rsh:104:44:application',
        fs: ['at ./index.rsh:102:15:application call to [unknown function] (defined at: ./index.rsh:102:19:function exp)'],
        msg: 'getGuess',
        who: 'Alice'
        });
      const v403 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:105:56:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:102:15:application call to [unknown function] (defined at: ./index.rsh:102:19:function exp)'],
        msg: 'random',
        who: 'Alice'
        });
      const v404 = [v401, v402];
      const v405 = stdlib.digest([ctc0, ctc1], [v403, v404]);
      
      const txn4 = await (ctc.sendrecv({
        args: [v352, v353, v354, v369, v374, v382, v397, v405],
        evt_cnt: 1,
        funcNum: 4,
        lct: v375,
        onlyIf: true,
        out_tys: [ctc2],
        pay: [stdlib.checkedBigNumberify('./index.rsh:108:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v408], secs: v410, time: v409, didSend: v106, from: v407 } = txn4;
          
          ;
          const v418 = stdlib.safeAdd(v409, v354);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v397],
        tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0, ctc0, ctc2],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v352, v353, v354, v369, v374, v382, v397],
          evt_cnt: 0,
          funcNum: 5,
          lct: v375,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v504, time: v503, didSend: v237, from: v502 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v369,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v504, time: v503, didSend: v237, from: v502 } = txn5;
        ;
        const v505 = stdlib.addressEq(v352, v502);
        const v506 = stdlib.addressEq(v369, v502);
        const v507 = v505 ? true : v506;
        stdlib.assert(v507, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:109:52:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        ;
        stdlib.protect(ctc3, await interact.informTimeout(), {
          at: './index.rsh:77:29:application',
          fs: ['at ./index.rsh:76:9:application call to [unknown function] (defined at: ./index.rsh:76:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:75:28:function exp)', 'at ./index.rsh:109:52:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Alice'
          });
        
        return;
        
        }
      else {
        const {data: [v408], secs: v410, time: v409, didSend: v106, from: v407 } = txn4;
        ;
        const v411 = stdlib.addressEq(v352, v407);
        stdlib.assert(v411, {
          at: './index.rsh:108:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v418 = stdlib.safeAdd(v409, v354);
        const txn5 = await (ctc.recv({
          didSend: false,
          evt_cnt: 2,
          funcNum: 6,
          out_tys: [ctc0, ctc0],
          timeoutAt: ['time', v418],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v352, v353, v354, v369, v374, v382, v408, v418],
            evt_cnt: 0,
            funcNum: 7,
            lct: v409,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v486, time: v485, didSend: v203, from: v484 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v352,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v486, time: v485, didSend: v203, from: v484 } = txn6;
          ;
          const v487 = stdlib.addressEq(v352, v484);
          const v488 = stdlib.addressEq(v369, v484);
          const v489 = v487 ? true : v488;
          stdlib.assert(v489, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:118:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Alice'
            });
          ;
          stdlib.protect(ctc3, await interact.informTimeout(), {
            at: './index.rsh:77:29:application',
            fs: ['at ./index.rsh:76:9:application call to [unknown function] (defined at: ./index.rsh:76:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:75:28:function exp)', 'at ./index.rsh:118:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Alice'
            });
          
          return;
          
          }
        else {
          const {data: [v425, v426], secs: v428, time: v427, didSend: v118, from: v424 } = txn5;
          ;
          const v429 = stdlib.addressEq(v369, v424);
          stdlib.assert(v429, {
            at: './index.rsh:117:9:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const v436 = stdlib.safeAdd(v427, v354);
          const txn6 = await (ctc.sendrecv({
            args: [v352, v353, v354, v369, v374, v382, v408, v425, v426, v436, v403, v401, v402],
            evt_cnt: 3,
            funcNum: 8,
            lct: v427,
            onlyIf: true,
            out_tys: [ctc0, ctc0, ctc0],
            pay: [stdlib.checkedBigNumberify('./index.rsh:127:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [v441, v442, v443], secs: v445, time: v444, didSend: v129, from: v440 } = txn6;
              
              ;
              let v450;
              const v451 = stdlib.eq(v443, v426);
              if (v451) {
                v450 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                }
              else {
                const v452 = stdlib.safeAdd(v442, v425);
                const v453 = stdlib.eq(v452, v443);
                if (v453) {
                  v450 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                  }
                else {
                  const v455 = stdlib.eq(v452, v426);
                  if (v455) {
                    v450 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                    }
                  else {
                    v450 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                    }
                  }
                }
              const v456 = stdlib.eq(v450, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
              if (v456) {
                const v457 = stdlib.safeAdd(v374, stdlib.checkedBigNumberify('./index.rsh:133:25:decimal', stdlib.UInt_max, '100'));
                const cv374 = v457;
                const cv375 = v444;
                const cv382 = v382;
                
                await (async () => {
                  const v374 = cv374;
                  const v375 = cv375;
                  const v382 = cv382;
                  
                  if (await (async () => {
                    const v386 = stdlib.safeDiv(v374, stdlib.checkedBigNumberify('./index.rsh:99:18:decimal', stdlib.UInt_max, '100'));
                    const v387 = stdlib.lt(v386, stdlib.checkedBigNumberify('./index.rsh:99:24:decimal', stdlib.UInt_max, '3'));
                    let v388;
                    if (v387) {
                      const v389 = stdlib.safeMod(v374, stdlib.checkedBigNumberify('./index.rsh:99:37:decimal', stdlib.UInt_max, '100'));
                      const v390 = stdlib.lt(v389, stdlib.checkedBigNumberify('./index.rsh:99:43:decimal', stdlib.UInt_max, '3'));
                      v388 = v390;
                      }
                    else {
                      v388 = false;
                      }
                    
                    return v388;})()) {
                    const v397 = stdlib.safeAdd(v375, v354);
                    sim_r.isHalt = false;
                    }
                  else {
                    const v520 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:144:12:decimal', stdlib.UInt_max, '2'), v353);
                    let v521;
                    const v522 = stdlib.safeDiv(v374, stdlib.checkedBigNumberify('./index.rsh:30:14:decimal', stdlib.UInt_max, '100'));
                    const v523 = stdlib.safeMod(v374, stdlib.checkedBigNumberify('./index.rsh:30:27:decimal', stdlib.UInt_max, '10'));
                    const v524 = stdlib.gt(v522, v523);
                    if (v524) {
                      v521 = stdlib.checkedBigNumberify('./index.rsh:31:12:decimal', stdlib.UInt_max, '0');
                      }
                    else {
                      v521 = stdlib.checkedBigNumberify('./index.rsh:34:12:decimal', stdlib.UInt_max, '2');
                      }
                    const v525 = stdlib.eq(v521, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
                    const v526 = v525 ? v352 : v369;
                    sim_r.txns.push({
                      kind: 'from',
                      to: v526,
                      tok: undefined /* Nothing */
                      });
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }})();}
              else {
                let v458;
                if (v451) {
                  v458 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                  }
                else {
                  const v460 = stdlib.safeAdd(v442, v425);
                  const v461 = stdlib.eq(v460, v443);
                  if (v461) {
                    v458 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                    }
                  else {
                    const v463 = stdlib.eq(v460, v426);
                    if (v463) {
                      v458 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                      }
                    else {
                      v458 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                      }
                    }
                  }
                const v464 = stdlib.eq(v458, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
                if (v464) {
                  const v465 = stdlib.safeAdd(v374, stdlib.checkedBigNumberify('./index.rsh:138:27:decimal', stdlib.UInt_max, '1'));
                  const cv374 = v465;
                  const cv375 = v444;
                  const cv382 = v382;
                  
                  await (async () => {
                    const v374 = cv374;
                    const v375 = cv375;
                    const v382 = cv382;
                    
                    if (await (async () => {
                      const v386 = stdlib.safeDiv(v374, stdlib.checkedBigNumberify('./index.rsh:99:18:decimal', stdlib.UInt_max, '100'));
                      const v387 = stdlib.lt(v386, stdlib.checkedBigNumberify('./index.rsh:99:24:decimal', stdlib.UInt_max, '3'));
                      let v388;
                      if (v387) {
                        const v389 = stdlib.safeMod(v374, stdlib.checkedBigNumberify('./index.rsh:99:37:decimal', stdlib.UInt_max, '100'));
                        const v390 = stdlib.lt(v389, stdlib.checkedBigNumberify('./index.rsh:99:43:decimal', stdlib.UInt_max, '3'));
                        v388 = v390;
                        }
                      else {
                        v388 = false;
                        }
                      
                      return v388;})()) {
                      const v397 = stdlib.safeAdd(v375, v354);
                      sim_r.isHalt = false;
                      }
                    else {
                      const v520 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:144:12:decimal', stdlib.UInt_max, '2'), v353);
                      let v521;
                      const v522 = stdlib.safeDiv(v374, stdlib.checkedBigNumberify('./index.rsh:30:14:decimal', stdlib.UInt_max, '100'));
                      const v523 = stdlib.safeMod(v374, stdlib.checkedBigNumberify('./index.rsh:30:27:decimal', stdlib.UInt_max, '10'));
                      const v524 = stdlib.gt(v522, v523);
                      if (v524) {
                        v521 = stdlib.checkedBigNumberify('./index.rsh:31:12:decimal', stdlib.UInt_max, '0');
                        }
                      else {
                        v521 = stdlib.checkedBigNumberify('./index.rsh:34:12:decimal', stdlib.UInt_max, '2');
                        }
                      const v525 = stdlib.eq(v521, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
                      const v526 = v525 ? v352 : v369;
                      sim_r.txns.push({
                        kind: 'from',
                        to: v526,
                        tok: undefined /* Nothing */
                        });
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined /* Nothing */
                        })
                      sim_r.isHalt = true;
                      }})();}
                else {
                  const cv374 = v374;
                  const cv375 = v444;
                  const cv382 = v382;
                  
                  await (async () => {
                    const v374 = cv374;
                    const v375 = cv375;
                    const v382 = cv382;
                    
                    if (await (async () => {
                      const v386 = stdlib.safeDiv(v374, stdlib.checkedBigNumberify('./index.rsh:99:18:decimal', stdlib.UInt_max, '100'));
                      const v387 = stdlib.lt(v386, stdlib.checkedBigNumberify('./index.rsh:99:24:decimal', stdlib.UInt_max, '3'));
                      let v388;
                      if (v387) {
                        const v389 = stdlib.safeMod(v374, stdlib.checkedBigNumberify('./index.rsh:99:37:decimal', stdlib.UInt_max, '100'));
                        const v390 = stdlib.lt(v389, stdlib.checkedBigNumberify('./index.rsh:99:43:decimal', stdlib.UInt_max, '3'));
                        v388 = v390;
                        }
                      else {
                        v388 = false;
                        }
                      
                      return v388;})()) {
                      const v397 = stdlib.safeAdd(v375, v354);
                      sim_r.isHalt = false;
                      }
                    else {
                      const v520 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:144:12:decimal', stdlib.UInt_max, '2'), v353);
                      let v521;
                      const v522 = stdlib.safeDiv(v374, stdlib.checkedBigNumberify('./index.rsh:30:14:decimal', stdlib.UInt_max, '100'));
                      const v523 = stdlib.safeMod(v374, stdlib.checkedBigNumberify('./index.rsh:30:27:decimal', stdlib.UInt_max, '10'));
                      const v524 = stdlib.gt(v522, v523);
                      if (v524) {
                        v521 = stdlib.checkedBigNumberify('./index.rsh:31:12:decimal', stdlib.UInt_max, '0');
                        }
                      else {
                        v521 = stdlib.checkedBigNumberify('./index.rsh:34:12:decimal', stdlib.UInt_max, '2');
                        }
                      const v525 = stdlib.eq(v521, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
                      const v526 = v525 ? v352 : v369;
                      sim_r.txns.push({
                        kind: 'from',
                        to: v526,
                        tok: undefined /* Nothing */
                        });
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined /* Nothing */
                        })
                      sim_r.isHalt = true;
                      }})();}}
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: ['time', v436],
            tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0, ctc2, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          if (txn6.didTimeout) {
            const txn7 = await (ctc.sendrecv({
              args: [v352, v353, v354, v369, v374, v382, v408, v425, v426, v436],
              evt_cnt: 0,
              funcNum: 9,
              lct: v427,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v468, time: v467, didSend: v169, from: v466 } = txn7;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v352,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0, ctc2, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v468, time: v467, didSend: v169, from: v466 } = txn7;
            ;
            const v469 = stdlib.addressEq(v352, v466);
            const v470 = stdlib.addressEq(v369, v466);
            const v471 = v469 ? true : v470;
            stdlib.assert(v471, {
              at: 'reach standard library:197:11:dot',
              fs: ['at ./index.rsh:128:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'sender correct',
              who: 'Alice'
              });
            ;
            stdlib.protect(ctc3, await interact.informTimeout(), {
              at: './index.rsh:77:29:application',
              fs: ['at ./index.rsh:76:9:application call to [unknown function] (defined at: ./index.rsh:76:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:75:28:function exp)', 'at ./index.rsh:128:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'informTimeout',
              who: 'Alice'
              });
            
            return;
            
            }
          else {
            const {data: [v441, v442, v443], secs: v445, time: v444, didSend: v129, from: v440 } = txn6;
            ;
            const v446 = stdlib.addressEq(v352, v440);
            stdlib.assert(v446, {
              at: './index.rsh:127:11:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Alice'
              });
            const v447 = [v442, v443];
            const v448 = stdlib.digest([ctc0, ctc1], [v441, v447]);
            const v449 = stdlib.digestEq(v408, v448);
            stdlib.assert(v449, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:130:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Alice'
              });
            let v450;
            const v451 = stdlib.eq(v443, v426);
            if (v451) {
              v450 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
              }
            else {
              const v452 = stdlib.safeAdd(v442, v425);
              const v453 = stdlib.eq(v452, v443);
              if (v453) {
                v450 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                }
              else {
                const v455 = stdlib.eq(v452, v426);
                if (v455) {
                  v450 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                  }
                else {
                  v450 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                  }
                }
              }
            const v456 = stdlib.eq(v450, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
            if (v456) {
              const v457 = stdlib.safeAdd(v374, stdlib.checkedBigNumberify('./index.rsh:133:25:decimal', stdlib.UInt_max, '100'));
              const cv374 = v457;
              const cv375 = v444;
              const cv382 = v382;
              
              v374 = cv374;
              v375 = cv375;
              v382 = cv382;
              
              txn3 = txn6;
              continue;}
            else {
              let v458;
              if (v451) {
                v458 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                }
              else {
                const v460 = stdlib.safeAdd(v442, v425);
                const v461 = stdlib.eq(v460, v443);
                if (v461) {
                  v458 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                  }
                else {
                  const v463 = stdlib.eq(v460, v426);
                  if (v463) {
                    v458 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                    }
                  else {
                    v458 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                    }
                  }
                }
              const v464 = stdlib.eq(v458, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
              if (v464) {
                const v465 = stdlib.safeAdd(v374, stdlib.checkedBigNumberify('./index.rsh:138:27:decimal', stdlib.UInt_max, '1'));
                const cv374 = v465;
                const cv375 = v444;
                const cv382 = v382;
                
                v374 = cv374;
                v375 = cv375;
                v382 = cv382;
                
                txn3 = txn6;
                continue;}
              else {
                const cv374 = v374;
                const cv375 = v444;
                const cv382 = v382;
                
                v374 = cv374;
                v375 = cv375;
                v382 = cv382;
                
                txn3 = txn6;
                continue;}}}
          
          }
        
        }
      
      }
    const v520 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:144:12:decimal', stdlib.UInt_max, '2'), v353);
    let v521;
    const v522 = stdlib.safeDiv(v374, stdlib.checkedBigNumberify('./index.rsh:30:14:decimal', stdlib.UInt_max, '100'));
    const v523 = stdlib.safeMod(v374, stdlib.checkedBigNumberify('./index.rsh:30:27:decimal', stdlib.UInt_max, '10'));
    const v524 = stdlib.gt(v522, v523);
    if (v524) {
      v521 = stdlib.checkedBigNumberify('./index.rsh:31:12:decimal', stdlib.UInt_max, '0');
      }
    else {
      v521 = stdlib.checkedBigNumberify('./index.rsh:34:12:decimal', stdlib.UInt_max, '2');
      }
    const v525 = stdlib.eq(v521, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
    const v526 = v525 ? v352 : v369;
    ;
    let v535;
    if (v524) {
      v535 = stdlib.checkedBigNumberify('./index.rsh:31:12:decimal', stdlib.UInt_max, '0');
      }
    else {
      v535 = stdlib.checkedBigNumberify('./index.rsh:34:12:decimal', stdlib.UInt_max, '2');
      }
    stdlib.protect(ctc3, await interact.seeOutcome(v374, v535), {
      at: './index.rsh:148:24:application',
      fs: ['at ./index.rsh:147:7:application call to [unknown function] (defined at: ./index.rsh:147:25:function exp)'],
      msg: 'seeOutcome',
      who: 'Alice'
      });
    
    return;
    }
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc4 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v353, v354], secs: v356, time: v355, didSend: v70, from: v352 } = txn1;
  ;
  const v365 = stdlib.safeAdd(v355, v354);
  stdlib.protect(ctc1, await interact.acceptWager(v353), {
    at: './index.rsh:90:25:application',
    fs: ['at ./index.rsh:89:11:application call to [unknown function] (defined at: ./index.rsh:89:15:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v352, v353, v354, v365],
    evt_cnt: 0,
    funcNum: 1,
    lct: v355,
    onlyIf: true,
    out_tys: [],
    pay: [v353, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v371, time: v370, didSend: v79, from: v369 } = txn2;
      
      const v373 = stdlib.add(v353, v353);
      sim_r.txns.push({
        amt: v353,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v374 = stdlib.checkedBigNumberify('./index.rsh:96:16:decimal', stdlib.UInt_max, '0');
      const v375 = v370;
      const v382 = v373;
      
      if (await (async () => {
        const v386 = stdlib.safeDiv(v374, stdlib.checkedBigNumberify('./index.rsh:99:18:decimal', stdlib.UInt_max, '100'));
        const v387 = stdlib.lt(v386, stdlib.checkedBigNumberify('./index.rsh:99:24:decimal', stdlib.UInt_max, '3'));
        let v388;
        if (v387) {
          const v389 = stdlib.safeMod(v374, stdlib.checkedBigNumberify('./index.rsh:99:37:decimal', stdlib.UInt_max, '100'));
          const v390 = stdlib.lt(v389, stdlib.checkedBigNumberify('./index.rsh:99:43:decimal', stdlib.UInt_max, '3'));
          v388 = v390;
          }
        else {
          v388 = false;
          }
        
        return v388;})()) {
        const v397 = stdlib.safeAdd(v375, v354);
        sim_r.isHalt = false;
        }
      else {
        const v520 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:144:12:decimal', stdlib.UInt_max, '2'), v353);
        let v521;
        const v522 = stdlib.safeDiv(v374, stdlib.checkedBigNumberify('./index.rsh:30:14:decimal', stdlib.UInt_max, '100'));
        const v523 = stdlib.safeMod(v374, stdlib.checkedBigNumberify('./index.rsh:30:27:decimal', stdlib.UInt_max, '10'));
        const v524 = stdlib.gt(v522, v523);
        if (v524) {
          v521 = stdlib.checkedBigNumberify('./index.rsh:31:12:decimal', stdlib.UInt_max, '0');
          }
        else {
          v521 = stdlib.checkedBigNumberify('./index.rsh:34:12:decimal', stdlib.UInt_max, '2');
          }
        const v525 = stdlib.eq(v521, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
        const v526 = v525 ? v352 : v369;
        sim_r.txns.push({
          kind: 'from',
          to: v526,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v365],
    tys: [ctc4, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v352, v353, v354, v365],
      evt_cnt: 0,
      funcNum: 2,
      lct: v355,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v547, time: v546, didSend: v293, from: v545 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v352,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v547, time: v546, didSend: v293, from: v545 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:77:29:application',
      fs: ['at ./index.rsh:76:9:application call to [unknown function] (defined at: ./index.rsh:76:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:75:28:function exp)', 'at ./index.rsh:93:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v371, time: v370, didSend: v79, from: v369 } = txn2;
    const v373 = stdlib.add(v353, v353);
    ;
    let v374 = stdlib.checkedBigNumberify('./index.rsh:96:16:decimal', stdlib.UInt_max, '0');
    let v375 = v370;
    let v382 = v373;
    
    let txn3 = txn2;
    while (await (async () => {
      const v386 = stdlib.safeDiv(v374, stdlib.checkedBigNumberify('./index.rsh:99:18:decimal', stdlib.UInt_max, '100'));
      const v387 = stdlib.lt(v386, stdlib.checkedBigNumberify('./index.rsh:99:24:decimal', stdlib.UInt_max, '3'));
      let v388;
      if (v387) {
        const v389 = stdlib.safeMod(v374, stdlib.checkedBigNumberify('./index.rsh:99:37:decimal', stdlib.UInt_max, '100'));
        const v390 = stdlib.lt(v389, stdlib.checkedBigNumberify('./index.rsh:99:43:decimal', stdlib.UInt_max, '3'));
        v388 = v390;
        }
      else {
        v388 = false;
        }
      
      return v388;})()) {
      const v397 = stdlib.safeAdd(v375, v354);
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc2],
        timeoutAt: ['time', v397],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v352, v353, v354, v369, v374, v382, v397],
          evt_cnt: 0,
          funcNum: 5,
          lct: v375,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v504, time: v503, didSend: v237, from: v502 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v369,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v504, time: v503, didSend: v237, from: v502 } = txn5;
        ;
        const v505 = stdlib.addressEq(v352, v502);
        const v506 = stdlib.addressEq(v369, v502);
        const v507 = v505 ? true : v506;
        stdlib.assert(v507, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:109:52:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Bob'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:77:29:application',
          fs: ['at ./index.rsh:76:9:application call to [unknown function] (defined at: ./index.rsh:76:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:75:28:function exp)', 'at ./index.rsh:109:52:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Bob'
          });
        
        return;
        
        }
      else {
        const {data: [v408], secs: v410, time: v409, didSend: v106, from: v407 } = txn4;
        ;
        const v411 = stdlib.addressEq(v352, v407);
        stdlib.assert(v411, {
          at: './index.rsh:108:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v418 = stdlib.safeAdd(v409, v354);
        const v422 = stdlib.protect(ctc0, await interact.getHand(v374), {
          at: './index.rsh:114:50:application',
          fs: ['at ./index.rsh:113:13:application call to [unknown function] (defined at: ./index.rsh:113:17:function exp)'],
          msg: 'getHand',
          who: 'Bob'
          });
        const v423 = stdlib.protect(ctc0, await interact.getGuess(v374), {
          at: './index.rsh:115:52:application',
          fs: ['at ./index.rsh:113:13:application call to [unknown function] (defined at: ./index.rsh:113:17:function exp)'],
          msg: 'getGuess',
          who: 'Bob'
          });
        
        const txn5 = await (ctc.sendrecv({
          args: [v352, v353, v354, v369, v374, v382, v408, v418, v422, v423],
          evt_cnt: 2,
          funcNum: 6,
          lct: v409,
          onlyIf: true,
          out_tys: [ctc0, ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:117:9:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v425, v426], secs: v428, time: v427, didSend: v118, from: v424 } = txn5;
            
            ;
            const v436 = stdlib.safeAdd(v427, v354);
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v418],
          tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0, ctc2, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v352, v353, v354, v369, v374, v382, v408, v418],
            evt_cnt: 0,
            funcNum: 7,
            lct: v409,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v486, time: v485, didSend: v203, from: v484 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v352,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v486, time: v485, didSend: v203, from: v484 } = txn6;
          ;
          const v487 = stdlib.addressEq(v352, v484);
          const v488 = stdlib.addressEq(v369, v484);
          const v489 = v487 ? true : v488;
          stdlib.assert(v489, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:118:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:77:29:application',
            fs: ['at ./index.rsh:76:9:application call to [unknown function] (defined at: ./index.rsh:76:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:75:28:function exp)', 'at ./index.rsh:118:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Bob'
            });
          
          return;
          
          }
        else {
          const {data: [v425, v426], secs: v428, time: v427, didSend: v118, from: v424 } = txn5;
          ;
          const v429 = stdlib.addressEq(v369, v424);
          stdlib.assert(v429, {
            at: './index.rsh:117:9:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          const v436 = stdlib.safeAdd(v427, v354);
          const txn6 = await (ctc.recv({
            didSend: false,
            evt_cnt: 3,
            funcNum: 8,
            out_tys: [ctc0, ctc0, ctc0],
            timeoutAt: ['time', v436],
            waitIfNotPresent: false
            }));
          if (txn6.didTimeout) {
            const txn7 = await (ctc.sendrecv({
              args: [v352, v353, v354, v369, v374, v382, v408, v425, v426, v436],
              evt_cnt: 0,
              funcNum: 9,
              lct: v427,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v468, time: v467, didSend: v169, from: v466 } = txn7;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v352,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0, ctc2, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v468, time: v467, didSend: v169, from: v466 } = txn7;
            ;
            const v469 = stdlib.addressEq(v352, v466);
            const v470 = stdlib.addressEq(v369, v466);
            const v471 = v469 ? true : v470;
            stdlib.assert(v471, {
              at: 'reach standard library:197:11:dot',
              fs: ['at ./index.rsh:128:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'sender correct',
              who: 'Bob'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:77:29:application',
              fs: ['at ./index.rsh:76:9:application call to [unknown function] (defined at: ./index.rsh:76:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:75:28:function exp)', 'at ./index.rsh:128:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'informTimeout',
              who: 'Bob'
              });
            
            return;
            
            }
          else {
            const {data: [v441, v442, v443], secs: v445, time: v444, didSend: v129, from: v440 } = txn6;
            ;
            const v446 = stdlib.addressEq(v352, v440);
            stdlib.assert(v446, {
              at: './index.rsh:127:11:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Bob'
              });
            const v447 = [v442, v443];
            const v448 = stdlib.digest([ctc0, ctc3], [v441, v447]);
            const v449 = stdlib.digestEq(v408, v448);
            stdlib.assert(v449, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:130:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Bob'
              });
            let v450;
            const v451 = stdlib.eq(v443, v426);
            if (v451) {
              v450 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
              }
            else {
              const v452 = stdlib.safeAdd(v442, v425);
              const v453 = stdlib.eq(v452, v443);
              if (v453) {
                v450 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                }
              else {
                const v455 = stdlib.eq(v452, v426);
                if (v455) {
                  v450 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                  }
                else {
                  v450 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                  }
                }
              }
            const v456 = stdlib.eq(v450, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
            if (v456) {
              const v457 = stdlib.safeAdd(v374, stdlib.checkedBigNumberify('./index.rsh:133:25:decimal', stdlib.UInt_max, '100'));
              const cv374 = v457;
              const cv375 = v444;
              const cv382 = v382;
              
              v374 = cv374;
              v375 = cv375;
              v382 = cv382;
              
              txn3 = txn6;
              continue;}
            else {
              let v458;
              if (v451) {
                v458 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                }
              else {
                const v460 = stdlib.safeAdd(v442, v425);
                const v461 = stdlib.eq(v460, v443);
                if (v461) {
                  v458 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                  }
                else {
                  const v463 = stdlib.eq(v460, v426);
                  if (v463) {
                    v458 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                    }
                  else {
                    v458 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                    }
                  }
                }
              const v464 = stdlib.eq(v458, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
              if (v464) {
                const v465 = stdlib.safeAdd(v374, stdlib.checkedBigNumberify('./index.rsh:138:27:decimal', stdlib.UInt_max, '1'));
                const cv374 = v465;
                const cv375 = v444;
                const cv382 = v382;
                
                v374 = cv374;
                v375 = cv375;
                v382 = cv382;
                
                txn3 = txn6;
                continue;}
              else {
                const cv374 = v374;
                const cv375 = v444;
                const cv382 = v382;
                
                v374 = cv374;
                v375 = cv375;
                v382 = cv382;
                
                txn3 = txn6;
                continue;}}}
          
          }
        
        }
      
      }
    const v520 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:144:12:decimal', stdlib.UInt_max, '2'), v353);
    let v521;
    const v522 = stdlib.safeDiv(v374, stdlib.checkedBigNumberify('./index.rsh:30:14:decimal', stdlib.UInt_max, '100'));
    const v523 = stdlib.safeMod(v374, stdlib.checkedBigNumberify('./index.rsh:30:27:decimal', stdlib.UInt_max, '10'));
    const v524 = stdlib.gt(v522, v523);
    if (v524) {
      v521 = stdlib.checkedBigNumberify('./index.rsh:31:12:decimal', stdlib.UInt_max, '0');
      }
    else {
      v521 = stdlib.checkedBigNumberify('./index.rsh:34:12:decimal', stdlib.UInt_max, '2');
      }
    const v525 = stdlib.eq(v521, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
    const v526 = v525 ? v352 : v369;
    ;
    let v541;
    if (v524) {
      v541 = stdlib.checkedBigNumberify('./index.rsh:31:12:decimal', stdlib.UInt_max, '0');
      }
    else {
      v541 = stdlib.checkedBigNumberify('./index.rsh:34:12:decimal', stdlib.UInt_max, '2');
      }
    stdlib.protect(ctc1, await interact.seeOutcome(v374, v541), {
      at: './index.rsh:148:24:application',
      fs: ['at ./index.rsh:147:7:application call to [unknown function] (defined at: ./index.rsh:147:25:function exp)'],
      msg: 'seeOutcome',
      who: 'Bob'
      });
    
    return;
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `ByARAAECWAgFCSAHKFCAAWQDkAFgMCYDAQABAQAiNQAxGEEFnypkSSJbNQEhBFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIQUMQAL/SSEIDEAB8UkhBAxAAZdJIQYMQABWIQYSRCEGNAESRDQESSISTDQCEhFEKGQpZFBJNQNXACA1/4AEogVmjrAyBjQDIQ5bD0Q0/zEAEjQDVzAgMQASEUSxIrIBNAMlW7III7IQNP+yB7NCBLVIIQY0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSkpXACA1/yEHWzX+IQlbNf1XMCA1/CEKWzX7JVs1+iELWzX5gYgBWzX4STUFSUkiWzX3IQRbNfaBEFs19YAEEoZbwDT3FlA09hZQNPUWULAyBjQDIQ5bDEQ0/zEAEkQ0A1dgIDT3FjT2FjT1FlBQARJENPU0+BJJNfNBAAYjNfRCACU09jT5CEk18jT1EkEABiI19EIAETTyNPgSQQAGJDX0QgADIzX0NPQiEkEAFDT/NP40/TT8NPshDAgyBjT6QgNCNPNBAAYjNfJCACU09jT5CEk18TT1EkEABiI18kIAETTxNPgSQQAGJDXyQgADIzXyNPIkEkEAEzT/NP40/TT8NPsjCDIGNPpCAvg0/zT+NP00/DT7MgY0+kIC50ghCDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVwAgNf+ABOIbs6mwMgY0AyELWw9ENP8xABI0A1cwIDEAEhFEsSKyATQDJVuyCCOyEDT/sgezQgMoSYEGDEAAsEghCDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSVcAIDX/IQdbNf4hCVs1/VcwIDX8IQpbNfslWzX6V2AgNflJNQVJIls1+CEEWzX3gARKIcv8NPgWUDT3FlCwMgY0AyELWwxENPwxABJEMgY0/Qg19jT/NP4WUDT9FlA0/FA0+xZQNPoWUDT5UDT4FlA09xZQNPYWUChLAVcAf2cpSwFXfxlnSCEGNQEyBjUCQgKNSCEFNAESRDQESSISTDQCEhFEKGRJNQNXMCA1/4AEzJmSXLAyBjQDIQ9bD0Q0A1cAIDEAEjT/MQASEUSxIrIBNAMlW7III7IQNP+yB7NCAiFJJAxAANlJgQQMQACSSCEFNAESRDQESSISTDQCEhFEKGRJNQNJSkpXACA1/yEHWzX+IQlbNf1XMCA1/CEKWzX7JVs1+kk1BTX5gAQ4sCMtNPlQsDIGNAMhD1sMRDT/MQASRDIGNP0INfg0/zT+FlA0/RZQNPxQNPsWUDT6FlA0+VA0+BZQKEsBVwB/ZylLAVd/CWdIIQg1ATIGNQJCAZ4kEkQjNAESRDQESSISTDQCEhFEKGQ1A4AEQbFATbAyBjQDIRBbD0SxIrIBNAMhB1uyCCOyEDQDVwAgsgezQgFCSSMMQABISCM0ARJENARJIhJMNAISEUQoZEk1AyEHWzX/gASai5F0sDIGNAMhEFsMRDT/iAF6NANXACA0/zQDIQlbMQAiMgY0/0kIQgBgSIGgjQaIAVoiNAESRDQESSISTDQCEhFESTUFSSJbNf8hBFs1/oAErNEfwzT/FlA0/hZQsDT/iAEpMgY0/gg1/TEANP8WUDT+FlA0/RZQKEsBVwA4Z0gjNQEyBjUCQgCwNf81/jX9Nfw1+zX6Nfk0/SEMCkk19yENDEEADTT9IQwYIQ0MNfZCAAMiNfY09kEAMzT+NPsINfU0+TT6FlA0+xZQNPxQNP0WUDT/FlA09RZQKEsBVwBoZ0ghBTUBMgY1AkIATDT3NP2BChgNQQAGIjX1QgADJDX1sSKyASQ0+guyCCOyEDT8NPk09SISTbIHs0IAADEZIQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQhDTE1EkQiMTYSRCIxNxJEIjUBIjUCQv+uNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 152,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v353",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v354",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v353",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v354",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v408",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v425",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v426",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v441",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v442",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v443",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e9",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v408",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v425",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v426",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v441",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v442",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v443",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162002072380380620020728339810160408190526200002691620002a9565b6000808055436003556040805160208082018352928152815133815284518185015284840151805182850152909301516060840152905190917fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f95919081900360800190a16020820151516200009f90341460076200014a565b620000b9438360200151602001516200017560201b60201c565b81526040805160808082018352600060208084018281528486018381526060808701858152338089528b860180515186525186015184528a5182526001968790554390965588518086019690965292518589015290519084015251828401528451808303909301835260a090910190935280519192620001409260029290910190620001cc565b505050506200036d565b81620001715760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b60008262000184838262000309565b9150811015620001c65760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b604482015260640162000168565b92915050565b828054620001da9062000330565b90600052602060002090601f016020900481019282620001fe576000855562000249565b82601f106200021957805160ff191683800117855562000249565b8280016001018555821562000249579182015b82811115620002495782518255916020019190600101906200022c565b50620002579291506200025b565b5090565b5b808211156200025757600081556001016200025c565b604080519081016001600160401b0381118282101715620002a357634e487b7160e01b600052604160045260246000fd5b60405290565b60008183036060811215620002bd57600080fd5b620002c762000272565b835181526040601f1983011215620002de57600080fd5b620002e862000272565b60208581015182526040909501518582015293810193909352509092915050565b600082198211156200032b57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200034557607f821691505b602082108114156200036757634e487b7160e01b600052602260045260246000fd5b50919050565b611cf5806200037d6000396000f3fe60806040526004361061009a5760003560e01c80638e314769116100615780638e31476914610115578063a209ad4e14610128578063ab53f2c61461013b578063bf2c5b241461015e578063de73699814610171578063f73dbf001461018457005b80631e93b0f1146100a357806321642639146100c75780632c10a159146100da5780637eea518c146100ed578063832307571461010057005b366100a157005b005b3480156100af57600080fd5b506003545b6040519081526020015b60405180910390f35b6100a16100d53660046117da565b610197565b6100a16100e8366004611804565b610412565b6100a16100fb366004611804565b6105a1565b34801561010c57600080fd5b506001546100b4565b6100a1610123366004611804565b61071f565b6100a1610136366004611804565b6108ba565b34801561014757600080fd5b50610150610b38565b6040516100be929190611820565b6100a161016c366004611804565b610bd5565b6100a161017f366004611804565b610d6c565b6100a161019236600461187d565b610ec7565b6101a7600760005414601c6112f6565b6101c1813515806101ba57506001548235145b601d6112f6565b6000808055600280546101d39061188f565b80601f01602080910402602001604051908101604052809291908181526020018280546101ff9061188f565b801561024c5780601f106102215761010080835404028352916020019161024c565b820191906000526020600020905b81548152906001019060200180831161022f57829003601f168201915b50505050508060200190518101906102649190611918565b905061027c6040518060200160405280600081525090565b61028d8260e001514310601e6112f6565b604080513381528435602080830191909152850135818301529084013560608201527fb2a03f9306ab783007397921312164b54fbeead1388356342ff3ef55c8552b3f9060800160405180910390a16102e83415601a6112f6565b6060820151610303906001600160a01b03163314601b6112f6565b61031143836040015161131c565b81526040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a0808601519084015260c080860151908401528581013560e084015285820135610100840152835161012084015260096000554360015590516103e7918391016119c4565b6040516020818303038152906040526002908051906020019061040b9291906116ab565b5050505050565b61042260016000541460096112f6565b61043c8135158061043557506001548235145b600a6112f6565b60008080556002805461044e9061188f565b80601f016020809104026020016040519081016040528092919081815260200182805461047a9061188f565b80156104c75780601f1061049c576101008083540402835291602001916104c7565b820191906000526020600020905b8154815290600101906020018083116104aa57829003601f168201915b50505050508060200190518101906104df9190611a4b565b90506104f281606001514310600b6112f6565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f13383604051610523929190611ac4565b60405180910390a161053c8160200151341460086112f6565b61054461172f565b815181516001600160a01b039091169052602080830180518351830152604080850151845190910152825133606090910152818301805160009052514392019190915251800160208201516040015261059c8161136f565b505050565b6105b1600160005414600d6112f6565b6105cb813515806105c457506001548235145b600e6112f6565b6000808055600280546105dd9061188f565b80601f01602080910402602001604051908101604052809291908181526020018280546106099061188f565b80156106565780601f1061062b57610100808354040283529160200191610656565b820191906000526020600020905b81548152906001019060200180831161063957829003601f168201915b505050505080602001905181019061066e9190611a4b565b90506106828160600151431015600f6112f6565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d95033836040516106b3929190611ac4565b60405180910390a16106c73415600c6112f6565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610704573d6000803e3d6000fd5b506000808055600181905561071b90600290611788565b5050565b61072f60056000541460176112f6565b6107498135158061074257506001548235145b60186112f6565b60008080556002805461075b9061188f565b80601f01602080910402602001604051908101604052809291908181526020018280546107879061188f565b80156107d45780601f106107a9576101008083540402835291602001916107d4565b820191906000526020600020905b8154815290600101906020018083116107b757829003601f168201915b50505050508060200190518101906107ec9190611b01565b90506108008160c0015143101560196112f6565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d3383604051610831929190611ac4565b60405180910390a1610845341560156112f6565b8051610879906001600160a01b0316331461086f5760608201516001600160a01b03163314610872565b60015b60166112f6565b80606001516001600160a01b03166108fc8260a001519081150290604051600060405180830381858888f19350505050158015610704573d6000803e3d6000fd5b6108ca60056000541460126112f6565b6108e4813515806108dd57506001548235145b60136112f6565b6000808055600280546108f69061188f565b80601f01602080910402602001604051908101604052809291908181526020018280546109229061188f565b801561096f5780601f106109445761010080835404028352916020019161096f565b820191906000526020600020905b81548152906001019060200180831161095257829003601f168201915b50505050508060200190518101906109879190611b01565b905061099f6040518060200160405280600081525090565b6109b08260c00151431060146112f6565b6040805133815284356020808301919091528501358183015290517f117ff0fc7909f539043dcba1a015e3c49852b86bcb1c87a6cfa653f771ccbdc09181900360600190a1610a01341560106112f6565b8151610a19906001600160a01b0316331460116112f6565b610a2743836040015161131c565b81526040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a080860151908401528581013560c0840152835160e084015260076000554360015590516103e79183910160006101008201905060018060a01b038084511683526020840151602084015260408401516040840152806060850151166060840152506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015292915050565b600060606000546002808054610b4d9061188f565b80601f0160208091040260200160405190810160405280929190818152602001828054610b799061188f565b8015610bc65780601f10610b9b57610100808354040283529160200191610bc6565b820191906000526020600020905b815481529060010190602001808311610ba957829003601f168201915b50505050509050915091509091565b610be560076000541460216112f6565b610bff81351580610bf857506001548235145b60226112f6565b600080805560028054610c119061188f565b80601f0160208091040260200160405190810160405280929190818152602001828054610c3d9061188f565b8015610c8a5780601f10610c5f57610100808354040283529160200191610c8a565b820191906000526020600020905b815481529060010190602001808311610c6d57829003601f168201915b5050505050806020019051810190610ca29190611918565b9050610cb68160e0015143101560236112f6565b7f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb3383604051610ce7929190611ac4565b60405180910390a1610cfb3415601f6112f6565b8051610d2f906001600160a01b03163314610d255760608201516001600160a01b03163314610d28565b60015b60206112f6565b805160a08201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610704573d6000803e3d6000fd5b610d7c600960005414602c6112f6565b610d9681351580610d8f57506001548235145b602d6112f6565b600080805560028054610da89061188f565b80601f0160208091040260200160405190810160405280929190818152602001828054610dd49061188f565b8015610e215780601f10610df657610100808354040283529160200191610e21565b820191906000526020600020905b815481529060010190602001808311610e0457829003601f168201915b5050505050806020019051810190610e399190611b9f565b9050610e4e816101200151431015602e6112f6565b7f7533cfcbaea81c55f5c15df7ca9474738a32835ebe63ae177376e624bc7df0bd3383604051610e7f929190611ac4565b60405180910390a1610e933415602a6112f6565b8051610d2f906001600160a01b03163314610ebd5760608201516001600160a01b03163314610ec0565b60015b602b6112f6565b610ed760096000541460276112f6565b610ef181351580610eea57506001548235145b60286112f6565b600080805560028054610f039061188f565b80601f0160208091040260200160405190810160405280929190818152602001828054610f2f9061188f565b8015610f7c5780601f10610f5157610100808354040283529160200191610f7c565b820191906000526020600020905b815481529060010190602001808311610f5f57829003601f168201915b5050505050806020019051810190610f949190611b9f565b9050610fdc6040805161010081018252600060c0820181815260e08301829052825260208201819052918101829052606081018290526080810182905260a081019190915290565b610fee826101200151431060296112f6565b604080513381528435602080830191909152850135818301529084013560608083019190915284013560808201527ffd32b36911ab7035ae1794d1dae05519be50928c6d0d79bfec6d930e4feeb61b9060a00160405180910390a1611055341560246112f6565b815161106d906001600160a01b0316331460256112f6565b80516040848101359091528151606080860135602092830152835183518388013581850152815181860152908301518183015283518082039092018252608001909252815191012060c08301516110c6911460266112f6565b61010082015160608401351460408201819052156110ea5760016020820152611141565b6110ff83602001602001358360e0015161131c565b6060808301829052840135141561111c5760006020820152611141565b816101000151816060015114156111395760026020820152611141565b600160208201525b60208101516111c35761115261172f565b825181516001600160a01b03918216905260208085015183519091015260408085015183519091015260608085015183519216910152608083015161119890606461131c565b602080830180519290925281514391015260a08401519051604001526111bd8161136f565b50505050565b8060400151156111d95760016080820152611231565b6111ee83602001602001358360e0015161131c565b60a082018190526060840135141561120c5760006080820152611231565b8161010001518160a0015114156112295760026080820152611231565b600160808201525b60028160800151141561128c5761124661172f565b825181516001600160a01b03918216905260208085015183519091015260408085015183519091015260608085015183519216910152608083015161119890600161131c565b61129461172f565b825181516001600160a01b0391821690526020808501518351820152604080860151845182015260608087015185519416930192909252608085015181840180519190915280514392019190915260a08501519051909101526111bd8161136f565b8161071b5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6000826113298382611c4a565b91508110156113695760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401611313565b92915050565b61139c60405180608001604052806000815260200160001515815260200160008152602001600081525090565b6020820151516113ad9060646115b7565b808252600311156113d85760036113cd8360200151600001516064611605565b1060208201526113e0565b600060208201525b80602001511561152a5761140482602001516020015183600001516040015161131c565b81604001818152505061145f6040518060e0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b8251516001600160a01b039081168083528451602090810151818501908152865160409081015181870190815288516060908101518716818901908152858b018051516080808c01918252915186015160a0808d019182528d88015160c0808f019182526005600055436001558951808d019d909d5299518c8a01529651958b0195909552925190991690880152965190860152945191840191909152925160e0808401919091528351808403909101815261010090920190925280516111bd9260029201906116ab565b60208201515161153b90600a611605565b8151111561154f5760006060820152611557565b600260608201525b60608101511561156c57815160600151611570565b8151515b6001600160a01b03166108fc61158f600285600001516020015161164c565b6040518115909202916000818181858888f19350505050158015610704573d6000803e3d6000fd5b6000816115f45760405162461bcd60e51b815260206004820152600b60248201526a646976206279207a65726f60a81b6044820152606401611313565b6115fe8284611c78565b9392505050565b6000816116425760405162461bcd60e51b815260206004820152600b60248201526a646976206279207a65726f60a81b6044820152606401611313565b6115fe8284611c8c565b6000811580611670575082826116628183611ca0565b925061166e9083611c78565b145b6113695760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b6044820152606401611313565b8280546116b79061188f565b90600052602060002090601f0160209004810192826116d9576000855561171f565b82601f106116f257805160ff191683800117855561171f565b8280016001018555821561171f579182015b8281111561171f578251825591602001919060010190611704565b5061172b9291506117c5565b5090565b6040805160c0810182526000918101828152606082018390526080820183905260a0820192909252908190815260200161178360405180606001604052806000815260200160008152602001600081525090565b905290565b5080546117949061188f565b6000825580601f106117a4575050565b601f0160209004906000526020600020908101906117c291906117c5565b50565b5b8082111561172b57600081556001016117c6565b6000606082840312156117ec57600080fd5b50919050565b6000604082840312156117ec57600080fd5b60006040828403121561181657600080fd5b6115fe83836117f2565b82815260006020604081840152835180604085015260005b8181101561185457858101830151858201606001528201611838565b81811115611866576000606083870101525b50601f01601f191692909201606001949350505050565b6000608082840312156117ec57600080fd5b600181811c908216806118a357607f821691505b602082108114156117ec57634e487b7160e01b600052602260045260246000fd5b604051610140810167ffffffffffffffff811182821017156118f657634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b038116811461191357600080fd5b919050565b600061010080838503121561192c57600080fd5b6040519081019067ffffffffffffffff8211818310171561195d57634e487b7160e01b600052604160045260246000fd5b8160405261196a846118fc565b8152602084015160208201526040840151604082015261198c606085016118fc565b60608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152809250505092915050565b81516001600160a01b03168152610140810160208301516020830152604083015160408301526060830151611a0460608401826001600160a01b03169052565b506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525092915050565b600060808284031215611a5d57600080fd5b6040516080810181811067ffffffffffffffff82111715611a8e57634e487b7160e01b600052604160045260246000fd5b604052611a9a836118fc565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b6001600160a01b038316815281356020808301919091526060820190830135801515808214611af257600080fd5b80604085015250509392505050565b600060e08284031215611b1357600080fd5b60405160e0810181811067ffffffffffffffff82111715611b4457634e487b7160e01b600052604160045260246000fd5b604052611b50836118fc565b81526020830151602082015260408301516040820152611b72606084016118fc565b60608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b60006101408284031215611bb257600080fd5b611bba6118c4565b611bc3836118fc565b81526020830151602082015260408301516040820152611be5606084016118fc565b60608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152508091505092915050565b634e487b7160e01b600052601160045260246000fd5b60008219821115611c5d57611c5d611c34565b500190565b634e487b7160e01b600052601260045260246000fd5b600082611c8757611c87611c62565b500490565b600082611c9b57611c9b611c62565b500690565b6000816000190483118215151615611cba57611cba611c34565b50029056fea264697066735822122083ea5a2d03fd1b16aad193817b635879cb881d8abff29d66e0713ef11988c14864736f6c634300080c0033`,
  BytecodeLen: 8306,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:87:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:93:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:145:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:100:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:109:52:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:110:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:118:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:119:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:128:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
